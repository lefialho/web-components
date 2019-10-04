export default class Modal {
  constructor(openModalButton, closeModalButton, containerModal) {
    this.openModalButton = document.querySelectorAll(openModalButton);
    this.closeModalButton = document.querySelectorAll(closeModalButton);
    this.containerModal = document.querySelectorAll(containerModal);
    this.body = document.querySelector('body');
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

    this.body.classList.add('has-modal');
  }

  closeModal() {
    this.containerModal.forEach((item) => {
      item.classList.remove(this.activeClass)
    })

    this.body.classList.remove('has-modal');
  }

  clickOutsideModal(modal) {
    if (event.target === modal) {
      this.closeModal()
    }
  }

  addModalEvents() {
    this.openModalButton.forEach((button) => {
      button.addEventListener('click', this.openModal);
    })
    this.closeModalButton.forEach((button) => {
      button.addEventListener('click', this.closeModal)
    })
    this.containerModal.forEach((modal) => {
      modal.addEventListener('click', () => this.clickOutsideModal(modal))
    })
  }

  init() {
    if (this.openModalButton.length && this.closeModalButton.length && this.containerModal.length) {
      this.addModalEvents();
    }
    return this;
  }
}