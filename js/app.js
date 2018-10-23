class App {

    constructor () {
        this.btnTop = document.querySelector('#btn-top')
        this.divTop = document.querySelector('#div-top')
        this.aBtnMas = document.querySelectorAll('.mas')        

        this.aNodosMenu = document.querySelectorAll('.menu-desk a')
        this.aNodosSection = document.querySelectorAll('main section')

        this.header = document.querySelector('header')
        this.bajoHeader = document.querySelector('#bajo-header')
        this.nodoh1 = document.querySelector('h1')
        
        this.btnTop.addEventListener('click', this.subir.bind(this)) 

        this.menuHamburguesa = document.querySelector('#menu-hamburguesa')
        this.contenidoHamburguesa = document.querySelector('#contenido-hamburguesa')
        this.itemHamburguesa = document.querySelectorAll('#contenido-hamburguesa a')
        
        this.slideInterval = 3000
        this.aFigure = document.querySelectorAll('figure')
        this.empezarCarrousel()

        this.aOffset = []
        this.calcularOffsets()
        this.seccionActiva = 0
        this.index=0

        //Definición de handlers
        document.addEventListener('scroll', this.scrollDetect.bind(this) )

        this.aBtnMas.forEach(
            (btn) => {btn.addEventListener('click', this.mostrar.bind(this))}
        )

        this.menuHamburguesa.addEventListener('click', this.desplegarMenu.bind(this))
        this.itemHamburguesa.forEach(
            (item)=>{item.addEventListener('click', this.replegarMenu.bind(this))}
        )
        this.aNodosMenu.forEach(
            (nodoMenu) => {
                nodoMenu.addEventListener('click', this.navegar.bind(this))}
        )
        window.addEventListener('resize',this.calcularOffsets.bind(this)) 
       
        
    }   

    desplegarMenu(){
        this.contenidoHamburguesa.classList.toggle('hide-menu')
        this.contenidoHamburguesa.classList.add('menu-mobilesticky')
    }

    replegarMenu(){
        this.contenidoHamburguesa.classList.add('hide-menu')
    }
    
    scrollDetect (oE) {        
        let position = oE.target.scrollingElement.scrollTop     
        
        this.aOffset.every(
            (offset, i) => {
                if (position >= offset) {
                    this.index = i
                    return true
                } else {return false}           
            }
        )    
    
        if (this.seccionActiva != this.index) {            
            this.aNodosMenu.forEach(
                (nodoMenu) => {
                    
                    nodoMenu.classList.remove('active')}
            )
            
            this.aNodosMenu[this.index].classList.add('active')   
            this.seccionActiva = this.index
        }
        if (position> 30) {
            this.header.classList.add('sticky-header')
            this.header.classList.remove('normal-header')
            this.nodoh1.classList.add('hide')
            this.bajoHeader.classList.add('bajo-header')
            this.bajoHeader.classList.remove('hide')
        } else {
            this.header.classList.remove('sticky-header')
            this.header.classList.add('normal-header')
            this.nodoh1.classList.remove('hide')
            this.bajoHeader.classList.remove('bajo-header')
            this.bajoHeader.classList.add('hide')
        }
        if (position > 100) {
            this.divTop.classList.remove('hide')
        } else {
            this.divTop.classList.add('hide')
        }
    }

    navegar(oE) {
        let i = oE.target.dataset.index
        if (i<5){
            oE.preventDefault()
            window.scroll({
                top: this.aOffset[i], 
                left: 0, 
                behavior: 'smooth'
            })
        }              
    }

    calcularOffsets(){
        this.aNodosSection.forEach(
            (section) => {             
                this.aOffset.push(section.offsetTop-170)
            }
        )
        this.aOffset[0] = 0        
    }

    subir(oE) {
        
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        })
    }

    mostrar(oE){
        let nodoBtn = oE.target
        let nodoTxt = nodoBtn.previousElementSibling
        nodoTxt.classList.toggle('hide')
        if (nodoTxt.classList.contains('hide')){
            nodoBtn.textContent = "Ver más"
        } else{
            nodoBtn.textContent = "Ver menos"
        }
    }

    avanzar(){
        let pointer = 0;
        this.aFigure.forEach(
            (item, i)=>{
                if (item.className=='visible') {
                    item.className=''
                    pointer = i
                }
            }
        )
        if (++pointer==this.aFigure.length){
            pointer = 0
        }
        this.aFigure[pointer].className='visible'
        
        setTimeout(this.avanzar.bind(this), this.slideInterval)
    }

    empezarCarrousel() {
        setTimeout(this.avanzar.bind(this), this.slideInterval);
    }
}

//document.addEventListener('DOMContentLoaded', ()=> {new  App()})
window.addEventListener('load', ()=> {new  App()})

