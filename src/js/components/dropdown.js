import outSideClick from './outside-click.js';

export default class DropDown {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    if (events === undefined)
      this.events = ['click'];
    else
      this.events = events;
    this.activeClass = 'active'
    this.activeDropDown = this.activeDropDown.bind(this);
  }

  activeDropDown(event) {
    event.preventDefault();
    const element = event.currentTarget;

    element.classList.toggle(this.activeClass);
    element.nextElementSibling.classList.toggle(this.activeClass);

    outSideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
      element.nextElementSibling.classList.remove(this.activeClass);
    });
  }

  addDropDownEvent() {
    this.dropdownMenus.forEach(menu => {
      this.events.forEach(userEvent => {
        menu.addEventListener(userEvent, this.activeDropDown)
      });
    });
  }

  init() {
    if(this.dropdownMenus.length) {
      this.addDropDownEvent();
    }
    return this;
  }
}