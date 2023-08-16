class ObserverReveal {
  nodeListTarget: NodeListOf<Element>;
  classRemoval: string;
  ratio: number;
  options: object;
  observer: IntersectionObserver;

  constructor(nodeListTarget: NodeListOf<Element>, classRemoval: string) {
    this.nodeListTarget = nodeListTarget;
    this.classRemoval = classRemoval;

    // si on est sur mobile il faut limité le ratio au maximum
    if (!this._isMobile()) {
      this.ratio = 0.2;
    } else {
      this.ratio = 0.07;
    }
    // les option peuvent etre dynamisé dans la class si besoin
    this.options = {
      root: null,
      rootMargin: "0px",
      threshold: this.ratio,
    };

    this._handleIntersect = this._handleIntersect.bind(this);
    this.observer = new IntersectionObserver(this._handleIntersect, this.options);
  }

  _handleIntersect(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > this.ratio) {
        entry.target.classList.remove(this.classRemoval);
        observer.unobserve(entry.target);
      }
    });
  }

  _isMobile(): boolean {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ) {
      return true;
    } else {
      return false;
    }
  }

  observe(): void {
    this.nodeListTarget.forEach((r) => {
      this.observer.observe(r);
    });
  }

  getObserver(): IntersectionObserver {
    return this.observer;
  }
}

export default ObserverReveal;
