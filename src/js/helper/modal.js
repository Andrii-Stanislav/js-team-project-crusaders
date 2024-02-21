 export default class Modal {
  constructor() {
    this.modal = document.getElementById('modalDialog');
    this.closeBtn = document.querySelector('.button-close');
    this.modalContent = document.getElementById('modal-content');

    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  handleCloseButtonClick() {
    this.close();
  }

  handleModalClick(event) {
    if (event.target == this.modal) {
      this.close();
    }
  }

  open() {
    this.closeBtn.addEventListener('click', this.handleCloseButtonClick);
    this.modal.addEventListener('click', this.handleModalClick);
    this.modal.showModal();
  }

  close() {
    this.modal.close();
    this.closeBtn.removeEventListener('click', this.handleCloseButtonClick);
    this.modal.removeEventListener('click', this.handleModalClick);
  }
}
