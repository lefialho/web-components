export default class Collapse {
  constructor(collapseGroup) {
    this.collapseGroup = document.querySelectorAll(collapseGroup);
  }

  collapseConfig() {
    this.collapseGroup.forEach((collapse) => {
      const collapseItem = collapse.querySelectorAll('[data-collapse="item"]');
      const activeClass = 'active';

      collapseItem[0].classList.add(activeClass);
      collapseItem[0].nextElementSibling.classList.add(activeClass);

      function activateCollapse() {
        this.classList.toggle(activeClass);
        this.nextElementSibling.classList.toggle(activeClass);
      }

      collapseItem.forEach((item) => {
        item.addEventListener('click', activateCollapse)
      });
    })
  }

  init() {
    if (this.collapseGroup.length) {
      this.collapseConfig()
    }
    return this;
  }
}