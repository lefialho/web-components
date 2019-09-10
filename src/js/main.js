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
        collapseItem[0].classList.add(activeClass);
        collapseItem[0].nextElementSibling.classList.add(activeClass);

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
      if (this.menuMobileButton && this.menuList) {
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
    block: 'end'
  };
  const smoothScroll = new SmoothScroll('[data-smooth] a[href^="#"]', options);
  smoothScroll.init();
  const activateNavigation = new ActivateNavigation('[data-nav="active-nav"]', '[data-activate="content"]');
  activateNavigation.init();

}));
