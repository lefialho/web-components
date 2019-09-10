export default class Modal {
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

    thisModal.forEach((item) => {
      item.classList.add(this.activeClass)
    })
  }

  closeModal() {
    this.containerModal.forEach((item) => {
      item.classList.remove(this.activeClass)
    })
  }

  clickOutsideModal(modal) {
    if (event.target === modal) {
      this.closeModal()
    }
  }

  addModalEvents() {
    this.openButton.forEach((button) => {
      button.addEventListener('click', this.openModal);
    })
    this.closeButton.forEach((button) => {
      button.addEventListener('click', this.closeModal)
    })
    this.containerModal.forEach((modal) => {
      modal.addEventListener('click', () => this.clickOutsideModal(modal))
    })
  }

  init() {
    if (this.openButton.length && this.closeButton.length && this.containerModal.length) {
      this.addModalEvents();
    }
    return this;
  }
}