import debounce from './debounce.js';

export default class backTopButton {
  constructor(topButton) {
    this.topButton = document.querySelector(topButton);
    this.acttiveClass = 'active';
    
    this.showButton = debounce(this.showButton.bind(this), 50);
  }

  showButton() {
    if (window.window.pageYOffset > 100)
      this.topButton.classList.add(this.acttiveClass);
    else
      this.topButton.classList.remove(this.acttiveClass)
  }

  init() {
    if (this.topButton) {
      window.addEventListener('scroll', this.showButton);
    }
    return this
  }
}