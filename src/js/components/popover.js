import outSideClick from './outside-click.js'

export default class PopOver {
  constructor(popovers, events) {
    this.popovers = document.querySelectorAll(popovers);
    if (events === undefined)
      this.events = ['touchstart', 'click'];
    else
      this.events = events;
    this.activeClass = 'active'
    this.activatePopOver = this.activatePopOver.bind(this);
  }

  activatePopOver(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.nextElementSibling.classList.toggle(this.activeClass)

    outSideClick(element.nextElementSibling, this.events, () => {
      element.nextElementSibling.classList.remove(this.activeClass);
    });
  }

  addPopOverEvent() {
    this.popovers.forEach(popover => {
      this.events.forEach(userEvent => {
        popover.addEventListener(userEvent, this.activatePopOver)
      });
    });
  }

  init() {
    if (this.popovers.length) {
      this.addPopOverEvent()
    }
    return this;
  }
}


