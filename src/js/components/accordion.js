export default class Accordion {
  constructor(accordionGroup) {
    this.accordionGroup = document.querySelectorAll(accordionGroup);
  }

  accordionConfig() {
    this.accordionGroup.forEach((accordion) => {
      const accordionItem = accordion.querySelectorAll('[data-accordion="item"]');
      const activeClass = 'active';

      accordionItem[0].classList.add(activeClass);
      accordionItem[0].nextElementSibling.classList.add(activeClass);

      function activateAccordion() {
        accordionItem.forEach((item) => {
          if (!this.classList.contains(activeClass)) {
            item.classList.remove(activeClass);
            item.nextElementSibling.classList.remove(activeClass);
          }
        });

        this.classList.toggle(activeClass);
        this.nextElementSibling.classList.toggle(activeClass);
      }

      accordionItem.forEach((item) => {
        item.addEventListener('click', activateAccordion)
      });
    })
  }

  init() {
    if (this.accordionGroup.length) {
      this.accordionConfig()
    }
    return this;
  }
}