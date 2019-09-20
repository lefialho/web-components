import debounce from './debounce.js';

export default class backTopButton {
  constructor(topButton) {
    this.topButton = document.querySelector(topButton);
    console.log(this.topButton);

    this.showButton = debounce(this.showButton.bind(this), 50);
  }

  showButton() {
    console.log('test')
    if (window.window.pageYOffset > 100)
      this.topButton.classList.add('active');
    else
      this.topButton.classList.remove('active')
  }

  init() {
    if (this.topButton) {
      window.addEventListener('scroll', this.showButton);
    }
    return this
  }
}