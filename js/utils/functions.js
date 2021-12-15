/**
 * Animation toggle menu
 */
function animateMenu () {
  hamburger.addEventListener('click', (e) => {
    e.target.classList.toggle('is-active')
  }) 

  navItems.forEach((t) => {
    t.addEventListener('click', () => {
      navItems.forEach(a => {
        a.classList.remove('is-active')
      })
      t.classList.add('is-active')
    })
  })
}

/**
* show or hide ReCaptcha Google
*/
function showRecatcha () {
  const observerReCapchca = new IntersectionObserver(onIntersection)
  observerReCapchca.observe(form.getFormNode())
  
  function onIntersection(entries) {
    const badgeGrecaptcha = document.querySelector('.grecaptcha-badge')
    entries.forEach(entry => {
      if(entry.isIntersecting && !badgeGrecaptcha) {
        // Si le reCaptcha est chargé, pas besoin de le recharger, sinon recharger le script
        // Permet d'ajouter le script google reCaptcha uniquement lorsque l'on est sur le formulaire pour améliorer les performances
        const recaptchaScript = document.createElement('script')
        recaptchaScript.src = 'https://www.google.com/recaptcha/api.js?hl=fr'
        recaptchaScript.defer = true
        document.body.appendChild(recaptchaScript)        
      } else if (entry.isIntersecting && badgeGrecaptcha) {
        badgeGrecaptcha.classList.remove('grecaptcha-badge--disappear')
      } else if(!entry.isIntersecting && badgeGrecaptcha) {     
        badgeGrecaptcha.classList.add('grecaptcha-badge--disappear')
      }
    })
  }
}

/**
 * fixe le menu lorsque l'on scroll 
 */
function menuFixed () {
  const topNode = mainMenu.getBoundingClientRect().top + scrollY() + mainMenu.getBoundingClientRect().height
  window.addEventListener('scroll', onScrollMenu)
  
  function scrollY () {
    const supportPageOffset = window.pageYOffset !== undefined
    const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat")
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
  }
  
  function onScrollMenu () {
    const hasScrollClass = mainMenu.classList.contains('fixed-nav')
  
    if (scrollY() > topNode && !hasScrollClass ) {
      mainMenu.classList.add('fixed-nav')
    } else if (scrollY() < topNode && hasScrollClass) {
      mainMenu.classList.remove('fixed-nav')
    }
  }
}