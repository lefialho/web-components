(function (factory) {
  typeof define === 'function' && define.amd ? define('main', factory) :
  factory();
}(function () { 'use strict';

  class Accordion {
    constructor(accordionGroup) {
      this.accordionGroup = document.querySelectorAll(accordionGroup);
    }

    accordionConfig() {
      this.accordionGroup.forEach(accordion => {
        const accordionItem = accordion.querySelectorAll('[data-accordion="item"]');
        const activeClass = 'active';
        accordionItem[0].classList.add(activeClass);
        accordionItem[0].nextElementSibling.classList.add(activeClass);

        function activateAccordion() {
          accordionItem.forEach(item => {
            if (!this.classList.contains(activeClass)) {
              item.classList.remove(activeClass);
              item.nextElementSibling.classList.remove(activeClass);
            }
          });
          this.classList.toggle(activeClass);
          this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionItem.forEach(item => {
          item.addEventListener('click', activateAccordion);
        });
      });
    }

    init() {
      if (this.accordionGroup.length) {
        this.accordionConfig();
      }

      return this;
    }

  }

  class Collapse {
    constructor(collapseGroup) {
      this.collapseGroup = document.querySelectorAll(collapseGroup);
    }

    collapseConfig() {
      this.collapseGroup.forEach(collapse => {
        const collapseItem = collapse.querySelectorAll('[data-collapse="item"]');
        const activeClass = 'active';

        function activateCollapse() {
          this.classList.toggle(activeClass);
          this.nextElementSibling.classList.toggle(activeClass);
        }

        collapseItem.forEach(item => {
          item.addEventListener('click', activateCollapse);
        });
      });
    }

    init() {
      if (this.collapseGroup.length) {
        this.collapseConfig();
      }

      return this;
    }

  }

  class TabNav {
    constructor(tabGroup) {
      this.tabsGroup = document.querySelectorAll(tabGroup);
    }

    tabConfig() {
      this.tabsGroup.forEach(tab => {
        const tabsMenu = tab.querySelectorAll('[data-tab="nav"] [data-tab="item"]');
        const TabsContent = tab.querySelectorAll('[data-tab="content"]');
        tabsMenu.forEach(tab => {
          tab.addEventListener("click", e => {
            e.preventDefault();
            removeActiveTab();
            addActiveTab(tab);
          });
        });

        const removeActiveTab = () => {
          tabsMenu.forEach(tab => {
            tab.classList.remove('active');
          });
          TabsContent.forEach(content => {
            content.classList.remove('active');
          });
        };

        const addActiveTab = tab => {
          tab.classList.add('active');
          const href = tab.querySelector('[data-tab="link"]').getAttribute('href');
          const matchingContent = document.querySelector(href);
          matchingContent.classList.add('active');
        };
      });
    }

    init() {
      if (this.tabsGroup.length) {
        this.tabConfig();
      }

      return this;
    }

  }

  class Modal {
    constructor(openButton, closeButton, containerModal) {
      this.openButton = document.querySelectorAll(openButton);
      this.closeButton = document.querySelectorAll(closeButton);
      this.containerModal = document.querySelectorAll(containerModal);
      this.activeClass = 'active';
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    openModal(event) {
      event.preventDefault();
      const target = event.currentTarget.getAttribute('aria-controls');
      const thisModal = document.querySelectorAll(target);
      thisModal.forEach(item => {
        item.classList.add(this.activeClass);
      });
    }

    closeModal() {
      this.containerModal.forEach(item => {
        item.classList.remove(this.activeClass);
      });
    }

    clickOutsideModal(modal) {
      if (event.target === modal) {
        this.closeModal();
      }
    }

    addModalEvents() {
      this.openButton.forEach(button => {
        button.addEventListener('click', this.openModal);
      });
      this.closeButton.forEach(button => {
        button.addEventListener('click', this.closeModal);
      });
      this.containerModal.forEach(modal => {
        modal.addEventListener('click', () => this.clickOutsideModal(modal));
      });
    }

    init() {
      if (this.openButton.length && this.closeButton.length && this.containerModal.length) {
        this.addModalEvents();
      }

      return this;
    }

  }

  function outSideClick(element, events, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside);
        events.forEach(userEvent => {
          html.removeEventListener(userEvent, handleOutsideClick);
        });
        callback();
      } // console.log(event.target);
      // console.log(element.contains(event.target));
      // console.log(element)

    }

    if (!element.hasAttribute(outside)) {
      events.forEach(userEvent => {
        setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
      });
      element.setAttribute(outside, '');
    }
  }

  class DropDown {
    constructor(dropdownMenus, events) {
      this.dropdownMenus = document.querySelectorAll(dropdownMenus);
      if (events === undefined) this.events = ['touchstart', 'click'];else this.events = events;
      this.activeClass = 'active';
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
          menu.addEventListener(userEvent, this.activeDropDown);
        });
      });
    }

    init() {
      if (this.dropdownMenus.length) {
        this.addDropDownEvent();
      }

      return this;
    }

  }

  class MenuMobile {
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
      this.menuMobileButton.addEventListener('click', this.openMenu);
      this.bgBlack.addEventListener('click', this.closeMenu);
      this.menuClose.forEach(item => {
        item.addEventListener('click', this.closeMenu);
      });
    }

    init() {
      if (this.menuMobileButton && this.menuList && this.bgBlack) {
        this.addMenuMobileEvents();
      }

      return this;
    }

  }

  function debounce(callback, delay) {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
        timer = null;
      }, delay);
    };
  }

  class ScrollAnimation {
    constructor(sections) {
      this.sections = document.querySelectorAll(sections);
      this.halfWindow = window.innerHeight * 0.6;
      this.activeClass = 'active';
      this.checkDistance = debounce(this.checkDistance.bind(this), 50);
    }

    getDistance() {
      this.distance = [...this.sections].map(section => {
        const offset = section.offsetTop;
        return {
          element: section,
          offset: Math.floor(offset - this.halfWindow)
        };
      });
    }

    checkDistance() {
      this.distance.forEach(section => {
        if (window.pageYOffset > section.offset) section.element.classList.add(this.activeClass);else if (section.element.classList.contains(this.activeClass)) section.element.classList.remove(this.activeClass);
      });
    }

    init() {
      if (this.sections.length) {
        this.getDistance();
        this.checkDistance();
        window.addEventListener('scroll', this.checkDistance);
      }

      return this;
    }

    stop() {
      window.removeEventListener('scroll', this.checkDistance);
    }

  }

  class PopOver {
    constructor(popovers, events) {
      this.popovers = document.querySelectorAll(popovers);
      if (events === undefined) this.events = ['touchstart', 'click'];else this.events = events;
      this.activeClass = 'active';
      this.activatePopOver = this.activatePopOver.bind(this);
    }

    activatePopOver(event) {
      event.preventDefault();
      const element = event.currentTarget;
      element.nextElementSibling.classList.toggle(this.activeClass);
      outSideClick(element.nextElementSibling, this.events, () => {
        element.nextElementSibling.classList.remove(this.activeClass);
      });
    }

    addPopOverEvent() {
      this.popovers.forEach(popover => {
        this.events.forEach(userEvent => {
          popover.addEventListener(userEvent, this.activatePopOver);
        });
      });
    }

    init() {
      if (this.popovers.length) {
        this.addPopOverEvent();
      }

      return this;
    }

  }

  class SmoothScroll {
    constructor(links, options) {
      this.insideLinks = document.querySelectorAll(links);

      if (options === undefined) {
        this.options = {
          behavior: 'smooth',
          block: 'start'
        };
      } else {
        this.options = options;
      }

      this.scrollToSection = this.scrollToSection.bind(this);
    }

    scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView(this.options);
    }

    addLinkEvent() {
      this.insideLinks.forEach(link => {
        link.addEventListener('click', this.scrollToSection);
      });
    }

    init() {
      if (this.insideLinks.length) this.addLinkEvent();
      return this;
    }

  }

  class ActivateNavigation {
    constructor(activeNav, navContents) {
      this.activeNav = document.querySelector(activeNav);
      this.navContents = document.querySelectorAll(navContents);
      this.activeClass = 'active';
      this.activeOnScroll = debounce(this.activeOnScroll.bind(this), 50);
    }

    createNavegation() {
      this.navContents.forEach(topic => {
        const listItems = document.createElement('li');
        const links = document.createElement('a');
        const contentsId = topic.getAttribute('id');
        const contentsTitle = topic.getAttribute('title');
        links.innerText = contentsTitle;
        links.setAttribute('data-menu', 'activeLink');
        links.setAttribute('href', '#' + contentsId);
        listItems.appendChild(links);
        this.activeNav.appendChild(listItems);
      });
    }

    activeOnScroll(event) {
      this.navContents.forEach(content => {
        const contentStart = content.getBoundingClientRect().top - parseInt(window.getComputedStyle(content).getPropertyValue('margin-top'));
        const contentMarginTop = content.offsetHeight;
        const contentEnd = contentStart + contentMarginTop;
        const contentId = content.getAttribute('id');
        const itemMenu = document.querySelector('[data-menu="activeLink"][href="#' + contentId + '"]');

        if (content.scrollTop > contentStart && content.scrollTop < contentEnd) {
          itemMenu.classList.add(this.activeClass);
        } else {
          itemMenu.classList.remove(this.activeClass);
        }
      });
    }

    activeLinksOnclick() {
      this.selectLinks = document.querySelectorAll('[data-menu="activeLink"]');
      this.selectLinks.forEach(link => {
        link.addEventListener('click', () => this.activeLinks(link));
      });
    }

    activeLinks(link) {
      this.selectLinks.forEach(link => {
        link.classList.remove(this.activeClass);
      });
      link.classList.add(this.activeClass);
    }

    init() {
      if (this.activeNav && this.navContents) {
        this.createNavegation();
        this.activeLinksOnclick();
        window.addEventListener('scroll', this.activeOnScroll);
      }

      return this;
    }

  }

  class backTopButton {
    constructor(topButton) {
      this.topButton = document.querySelector(topButton);
      this.showButton = debounce(this.showButton.bind(this), 50);
    }

    showButton() {
      if (window.window.pageYOffset > 100) this.topButton.classList.add('active');else this.topButton.classList.remove('active');
    }

    init() {
      if (this.topButton) {
        window.addEventListener('scroll', this.showButton);
      }

      return this;
    }

  }

  class Slide {
    constructor(slide, wrapper) {
      this.slide = document.querySelector(slide);
      this.wrapper = document.querySelector(wrapper);
      this.distance = {
        finalPosition: 0,
        startX: 0,
        movement: 0
      };
      this.changeEvent = new Event('changeEvent');
      this.activeClass = 'active';
    }

    transition(active) {
      this.slide.style.transition = active ? 'transform .3s' : '';
    }

    moveSlide(distanceX) {
      this.distance.movePosition = distanceX;
      this.slide.style.transform = `translate3d(${distanceX}px, 0, 0`;
    }

    updatePosition(clientX) {
      this.distance.movement = (this.distance.startX - clientX) * 1.6;
      return this.distance.finalPosition - this.distance.movement;
    }

    onStart(event) {
      let moveType;

      if (event.type === 'mousedown') {
        event.preventDefault();
        this.distance.startX = event.clientX;
        moveType = 'mousemove';
      } else {
        this.distance.startX = event.changedTouches[0].clientX;
        moveType = 'touchmove';
      }

      this.wrapper.addEventListener(moveType, this.onMove);
      this.transition(false);
    }

    onMove() {
      const pointerPosition = event.type === 'mousemove' ? event.clientX : event.changedTouches[0].clientX;
      const finalPosition = this.updatePosition(pointerPosition);
      this.moveSlide(finalPosition);
    }

    onEnd(event) {
      const moveType = event.type === 'mouseup' ? 'mousemove' : 'touchmove';
      this.wrapper.removeEventListener(moveType, this.onMove);
      this.distance.finalPosition = this.distance.movePosition;
      this.transition(true);
      this.changeSlideOnEnd();
    }

    changeSlideOnEnd() {
      if (this.distance.movement > 100 && this.index.next !== undefined) {
        this.activeNextSlide();
      } else if (this.distance.movement < -100 && this.index.prev !== undefined) {
        this.activePrevSlide();
      } else {
        this.changeSlide(this.index.active);
      }
    }

    addSlideEvents() {
      this.wrapper.addEventListener('mousedown', this.onStart);
      this.wrapper.addEventListener('touchstart', this.onStart);
      this.wrapper.addEventListener('mouseup', this.onEnd);
      this.wrapper.addEventListener('touchend', this.onEnd);
    } //Slides config


    slidePosition(slide) {
      const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
      return -(slide.offsetLeft - margin);
    }

    slidesConfig() {
      this.slideArray = [...this.slide.children].map(element => {
        const position = this.slidePosition(element);
        return {
          position,
          element
        };
      });
    }

    slideIndexNav(index) {
      const last = this.slideArray.length - 1;
      this.index = {
        prev: index ? index - 1 : undefined,
        active: index,
        next: index === last ? undefined : index + 1
      };
    }

    changeSlide(index) {
      const activeSlide = this.slideArray[index];
      this.moveSlide(activeSlide.position);
      this.slideIndexNav(index);
      this.distance.finalPosition = activeSlide.position;
      this.changeActiveClass();
      this.wrapper.dispatchEvent(this.changeEvent);
    }

    changeActiveClass() {
      this.slideArray.forEach(item => {
        item.element.classList.remove(this.activeClass);
      });
      this.slideArray[this.index.active].element.classList.add(this.activeClass);
    }

    activePrevSlide() {
      if (this.index.prev !== undefined) this.changeSlide(this.index.prev);
    }

    activeNextSlide() {
      if (this.index.next !== undefined) this.changeSlide(this.index.next);
    }

    onResize() {
      this.slidesConfig();
      this.changeSlide(this.index.active);
    }

    addResizeEvent() {
      window.addEventListener('resize', this.onResize);
    }

    bindEvents() {
      this.onStart = this.onStart.bind(this);
      this.onMove = this.onMove.bind(this);
      this.onEnd = this.onEnd.bind(this);
      this.activePrevSlide = this.activePrevSlide.bind(this);
      this.activeNextSlide = this.activeNextSlide.bind(this);
      this.onResize = debounce(this.onResize.bind(this), 50);
    }

  }
  class SlideNav extends Slide {
    constructor(slide, wrapper) {
      super(slide, wrapper);
      this.bindControlEvents();
    }

    addArrow(prev, next) {
      this.prevElement = document.querySelector(prev);
      this.nextElement = document.querySelector(next);

      if (this.prevElement && this.nextElement) {
        this.addArrowEvent();
      }
    }

    addArrowEvent() {
      this.prevElement.addEventListener('click', this.activePrevSlide);
      this.nextElement.addEventListener('click', this.activeNextSlide);
    }

    createControl() {
      const control = document.createElement('ul');
      control.dataset.control = 'slide';
      this.slideArray.forEach((item, index) => {
        control.innerHTML += `<li><a href="#slide${index + 1}">${index + 1}</a></li>`;
      });
      this.wrapper.appendChild(control);
      return control;
    }

    eventControl(item, index) {
      item.addEventListener('click', event => {
        event.preventDefault();
        this.changeSlide(index);
      });
      this.wrapper.addEventListener('changeEvent', this.activeControlItem);
    }

    activeControlItem() {
      this.controlArray.forEach(item => {
        item.classList.remove(this.activeClass);
      });
      this.controlArray[this.index.active].classList.add(this.activeClass);

      if (this.prevElement && this.nextElement) {
        if (this.controlArray[0].classList.contains(this.activeClass)) {
          this.prevElement.classList.add('hide');
        } else {
          this.prevElement.classList.remove('hide');
        }

        if (this.controlArray[this.controlArray.length - 1].classList.contains(this.activeClass)) {
          this.nextElement.classList.add('hide');
        } else {
          this.nextElement.classList.remove('hide');
        }
      }
    }

    addControl(customControl) {
      if (this.slideArray) {
        this.control = document.querySelector(customControl) || this.createControl();
        this.controlArray = [...this.control.children];
        this.activeControlItem();
        this.controlArray.forEach(this.eventControl);
      }
    }

    bindControlEvents() {
      this.eventControl = this.eventControl.bind(this);
      this.activeControlItem = this.activeControlItem.bind(this);
    }

    init() {
      if (this.slide) {
        this.bindEvents();
        this.transition(true);
        this.addSlideEvents();
        this.slidesConfig();
        this.addResizeEvent();
        this.changeSlide(0);
        this.onResize();
      }

      return this;
    }

  }

  const accordion = new Accordion('[data-accordion="group"]');
  accordion.init();
  const collapse = new Collapse('[data-collapse="group"]');
  collapse.init();
  const tab = new TabNav('[data-tab="group"]');
  tab.init();
  const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
  modal.init();
  const dropdown = new DropDown('[data-dropdown="link"]');
  dropdown.init();
  const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]', '[data-menu="close"]', '[data-bgblack]', 'active');
  menuMobile.init();
  const scrollAnimation = new ScrollAnimation('[data-anime^="scroll"]');
  scrollAnimation.init();
  const popover = new PopOver('[data-popover="open"]');
  popover.init();
  const options = {
    behavior: 'smooth',
    block: 'start'
  };
  const smoothScroll = new SmoothScroll('[data-smooth] a[href^="#"]', options);
  smoothScroll.init();
  const activateNavigation = new ActivateNavigation('[data-nav="active-nav"]', '[data-activate="content"]');
  activateNavigation.init();
  const topButton = new backTopButton('[data-button="top-page"]');
  topButton.init(); // Slides

  const slide = new SlideNav('[data-slide="slide1"]', '[data-slide="slide-wrapper1"]');
  slide.init();
  slide.addArrow('[data-slide="prev1"]', '[data-slide="next1"]');
  slide.addControl('[data-slide="custom-controls1"]');
  const slide2 = new SlideNav('[data-slide="slide2"]', '[data-slide="slide-wrapper2"]');
  slide2.init();
  slide2.addArrow('[data-slide="prev2"]', '[data-slide="next2"]');
  slide2.addControl('[data-slide="custom-controls2"]');
  const slide3 = new SlideNav('[data-slide="slide3"]', '[data-slide="slide-wrapper3"]');
  slide3.init();
  slide3.addArrow('[data-slide="prev3"]', '[data-slide="next3"]');
  slide3.addControl('[data-slide="custom-controls3"]');
  const slide4 = new SlideNav('[data-slide="slide4"]', '[data-slide="slide-wrapper4"]');
  slide4.init();
  slide4.addArrow('[data-slide="prev4"]', '[data-slide="next4"]');
  slide4.addControl('[data-slide="custom-controls4"]');
  const slide5 = new SlideNav('[data-slide="slide5"]', '[data-slide="slide-wrapper5"]');
  slide5.init();
  slide5.addArrow('[data-slide="prev5"]', '[data-slide="next5"]');
  slide5.addControl('[data-slide="custom-controls5"]');
  const slide6 = new SlideNav('[data-slide="slide6"]', '[data-slide="slide-wrapper6"]');
  slide6.init();
  slide6.addArrow('[data-slide="prev6"]', '[data-slide="next6"]');
  slide6.addControl('[data-slide="custom-controls6"]');
  const slide7 = new SlideNav('[data-slide="slide7"]', '[data-slide="slide-wrapper7"]');
  slide7.init();
  slide7.addArrow('[data-slide="prev7"]', '[data-slide="next7"]');
  slide7.addControl('[data-slide="custom-controls7"]');
  const slide8 = new SlideNav('[data-slide="slide8"]', '[data-slide="slide-wrapper8"]');
  slide8.init();
  slide8.addArrow('[data-slide="prev8"]', '[data-slide="next8"]');
  slide8.addControl('[data-slide="custom-controls8"]');
  const slide9 = new SlideNav('[data-slide="slide9"]', '[data-slide="slide-wrapper9"]');
  slide9.init();
  slide9.addArrow('[data-slide="prev9"]', '[data-slide="next9"]');
  slide9.addControl('[data-slide="custom-controls9"]');
  const slide10 = new SlideNav('[data-slide="slide10"]', '[data-slide="slide-wrapper10"]');
  slide10.init();
  slide10.addArrow('[data-slide="prev10"]', '[data-slide="next10"]');
  slide10.addControl('[data-slide="custom-controls10"]');

}));
