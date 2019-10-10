export default class MenuMobile {
  constructor(menuMobileButton, menuList, menuClose, bgBlack, active) {
    this.menuMobileButton = document.querySelector(menuMobileButton);
    this.menuList = document.querySelector(menuList);
    this.menuClose = document.querySelectorAll(menuClose);
    this.activeClass = active;

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    this.menuMobileButton.classList.toggle(this.activeClass);
    this.menuList.classList.toggle(this.activeClass);
    this.bgBlack.classList.toggle(this.activeClass);
  }

  bgBlackCreation() {
    const bgBlackCreate = document.createElement('div');
    bgBlackCreate.setAttribute('class', 'bg-black');
    bgBlackCreate.setAttribute('data', 'bgBlack');
    
    const body = document.querySelector('body');
    body.appendChild(bgBlackCreate);

    this.bgBlack = document.querySelector('[data="bgBlack"]');
  }

  closeMenu() {
    this.bgBlack.classList.remove(this.activeClass);
    this.menuMobileButton.classList.remove(this.activeClass);
    this.menuList.classList.remove(this.activeClass);
  }

  addMenuMobileEvents() {
    this.menuMobileButton.addEventListener('click', this.openMenu)
    this.menuClose.forEach((item) => {
      item.addEventListener('click', this.closeMenu)
    });
    
    this.bgBlack.addEventListener('click', this.closeMenu);
  }

  init() {
    if (this.menuMobileButton && this.menuList) {
      this.bgBlackCreation();
      this.addMenuMobileEvents();
    }
    return this
  }
}