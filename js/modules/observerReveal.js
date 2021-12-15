class ObserverReveal {
  constructor(nodeListTarget, classRemoval) {
    this._nodeListTarget = nodeListTarget 
    this._classRemoval = classRemoval
    // si on est sur mobile il faut limité le ratio au maximum
    if (!this._isMobile()) {
      this._ratio = 0.2
    } else {
      this._ratio = 0.07
    }
    // les option peuvent etre dynamisé dans la class si besoin
    this._options = {
      root: null,
      rootMargin: '0px',
      threshold: this._ratio
    }

    this._handleIntersect = this._handleIntersect.bind(this)
    this._observer = new IntersectionObserver(this._handleIntersect, this._options)
  }

  _handleIntersect (entries, observer) {
    entries.forEach( entry => {
      if( entry.intersectionRatio > this._ratio ) {
        entry.target.classList.remove(this._classRemoval)
        observer.unobserve(entry.target)
      }
    })
  }

  _isMobile() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      return true
    }else{
      return false;
    }
  }

  observe () {
    this._nodeListTarget.forEach(r => {
      this._observer.observe(r)
    }) 
  }

  getObserver () {
    return this._observer
  }
}
