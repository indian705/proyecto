class App {

    constructor () {
        this.btnTop = document.querySelector('#btn-top')
        this.divTop = document.querySelector('#div-top')

        this.aNodosMenu = document.querySelectorAll('.menu-desk a')
        this.aNodosSection = document.querySelectorAll('main section')

        this.header = document.querySelector('header')
        this.bajoHeader = document.querySelector('#bajo-header')
        this.nodoh1 = document.querySelector('h1')

        
        this.btnTop.addEventListener('click', this.subir.bind(this)) 

        this.menuHamburguesa = document.querySelector('#menu-hamburguesa')
        this.contenidoHamburguesa = document.querySelector('#contenido-hamburguesa')
        this.itemHamburguesa = document.querySelectorAll('#contenido-hamburguesa a')

        this.seccionActiva = 0

        document.addEventListener('scroll', this.scrollDetect.bind(this) )

        this.menuHamburguesa.addEventListener('click', this.desplegarMenu.bind(this))
        this.itemHamburguesa.forEach(
            (item)=>{item.addEventListener('click', this.replegarMenu.bind(this))}
        )

        this.aNodosMenu.forEach(
            (nodoMenu) => {nodoMenu.classList.remove('active')}
        )
        this.aNodosMenu[5].classList.add('active')         
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

    subir(oE) {        
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        })
    }
}

//document.addEventListener('DOMContentLoaded', ()=> {new  App()})
window.addEventListener('load', ()=> {new  App()})

