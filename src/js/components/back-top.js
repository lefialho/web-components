import debounce from './debounce.js';

export default class backTopButton {
  constructor(topButton) {
    this.topButton = document.querySelector(topButton);
    this.activeClass = 'active';
    
    this.showButton = debounce(this.showButton.bind(this), 50);
  }

  showButton() {
    if (window.window.pageYOffset > 100)
      this.topButton.classList.add(this.activeClass);
    else
      this.topButton.classList.remove(this.activeClass)
  }

  init() {
    if (this.topButton) {
      window.addEventListener('scroll', this.showButton);
    }
    return this
  }
}