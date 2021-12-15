/**
 * Calcul la position de l'element par rapport au haut de la page
 * @param {HTMLElement} node 
 * @return {number}
 */
function offsetTop(node, acc = 0) {
  if (!node.offsetParent) {
    return offsetTop(node.offsetParent, acc + node.offsetTop)
  }

  return acc + node.offsetTop
}

class Parallax {
  /**
   * @param {HTMLElement} node 
   */
  constructor(node) {
    this._node = node
    this._ratio = parseFloat(node.dataset.parallax)
    this._onScroll = this._onScroll.bind(this)
    this._onResize = this._onResize.bind(this)
    this._onIntersection = this._onIntersection.bind(this)
    this._elementY = offsetTop(this._node) + this._node.offsetHeight / 2  
    this._isMobile = this._isMobile()
    
    const observer = new IntersectionObserver(this._onIntersection)    
    observer.observe(node)
  }

  _onResize() {
    this._elementY = offsetTop(this._node) + this._node.offsetHeight / 2
    this._onScroll()
  }
  /**
   * Fonction d'animation du parallax
   */
  _onScroll() {
    // Uniquement sur desktop pour un souci de performances
    
    if (!this._isMobile) {
      window.requestAnimationFrame(() => {
        const screenY = window.scrollY + window.innerHeight / 2
        const diffY = this._elementY - screenY
        if (diffY > -this._node.clientHeight) {
          this._node.style.setProperty('transform', `translateY(${ diffY * -1 * this._ratio }px)`)
        }        
      })
    }
  }

  _isMobile() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      return true
    }else{
      return false;
    }
  }

  /**
   * @param {IntersectionObserverEntry[]} entries 
   */
  _onIntersection(entries) {
    entries.forEach(entry => {
      if(entry.isIntersecting) {  
        this._onScroll()      
        document.addEventListener('scroll', this._onScroll)
        window.addEventListener('resize', this._onResize)
      } else { 
        document.removeEventListener('scroll', this._onScroll)
        window.removeEventListener('resize', this._onResize)
      }
    })
  }

  /**
   * @returns {Parallax[]}
   */
  static bind() {
    return Array.from(document.querySelectorAll('[data-parallax]')).map(node => {
      return new Parallax(node)
    })
  }
}