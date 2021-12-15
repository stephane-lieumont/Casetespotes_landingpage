// Objects Form
const firstname = new Input(document.querySelector('#form-firstname'))
const lastname = new Input(document.querySelector('#form-lastname'))
const email = new Input(document.querySelector('#form-email'))
const subject = new Input(document.querySelector('#form-subject'))
const message = new Input(document.querySelector('#form-message'))

const form = new Form(document.querySelector('#contact__form'), [ firstname, lastname, email, subject, message ])

// DOM Submit botton Selector
const buttonSubmit = document.querySelector('#input-submit')

// DOM Menu Mobile Selector
const mainMenu = document.querySelector("#header-page nav")
const hamburger = document.querySelector(".hamburger")
const navItems = document.querySelectorAll("#header-page nav li a")

// DOM Loader Selector
const loader = document.querySelector('.loader')

// DOM Animation reveal Selector
const reveal = document.querySelectorAll('.reveal')


/**
 * Execute les fonction après le chargement du DOM
 */
function main() {
  // Detecte si le javascript client est active
  document.documentElement.classList.add('reveal-loaded')
  document.documentElement.classList.add('loading')

  // Ajout nouveau observerReveal module
  const observerReveal = new ObserverReveal(reveal, 'reveal')

  // Une fois la page completement chargé
  window.addEventListener("load", function() {
    animateMenu()
    showRecatcha()
    menuFixed()

    // Init parallax Object
    Parallax.bind();

    // loader disparait
    loader.classList.add('loader--fadeout')

    // Ajout Fadout Loader
    const timer = this.setTimeout(() => {
      loader.classList.add('loader--none')
      loader.classList.remove('loader--fadeout')

      this.clearTimeout(timer)
    }, 1000)

    // Ajout reveal animation elements
    const timer2 = this.setTimeout(() => {  
      observerReveal.observe()
      this.clearTimeout(timer2)
    }, 600)
  })
}

main()





