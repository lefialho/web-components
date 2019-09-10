export default class MenuMobile {
  constructor(menuMobileButton, menuList, menuClose, bgBlack, active) {
    this.menuMobileButton = document.querySelector(menuMobileButton);
    this.menuList = document.querySelector(menuList);
    this.menuClose = document.querySelectorAll(menuClose);
    this.bgBlack = document.querySelector(bgBlack);
    this.activeClass = active;

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    this.menuMobileButton.classList.toggle(this.activeClass);
    this.menuList.classList.toggle(this.activeClass);
    this.bgBlack.classList.toggle(this.activeClass);
  }

  closeMenu() {
    this.bgBlack.classList.remove(this.activeClass);
    this.menuMobileButton.classList.remove(this.activeClass);
    this.menuList.classList.remove(this.activeClass);
  }

  addMenuMobileEvents() {
    this.menuMobileButton.addEventListener('click', this.openMenu)
    this.bgBlack.addEventListener('click', this.closeMenu)
    this.menuClose.forEach((item) => {
      item.addEventListener('click', this.closeMenu)
    })
  }

  init() {
    if (this.menuMobileButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this
  }
}