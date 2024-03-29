import { refs } from '../refs';
import { overlay } from './overlay.js';

export default class Modal {
  #contentEventListeners;
  #onCloseCallback;
  #modal;
  #closeBtn;
  #modalContent;

  constructor() {
    this.#modal = refs.modalDialog;
    this.#closeBtn = refs.closeModalBtn;
    this.#modalContent = refs.modalContent;

    this.#contentEventListeners = [];
    this.#onCloseCallback = [];

    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  handleCloseButtonClick() {
    this.close();
  }

  handleModalClick(event) {
    if (event.target === this.#modal) {
      this.close();
    }
  }

  open() {
    this.#closeBtn.addEventListener('click', this.handleCloseButtonClick);
    this.#modal.addEventListener('click', this.handleModalClick);
    this.#modal.showModal();
    overlay.show();
  }

  close(executeCallback = true) {
    this.#closeBtn.removeEventListener('click', this.handleCloseButtonClick);
    this.#modal.removeEventListener('click', this.handleModalClick);

    this.#contentEventListeners.forEach(({ type, lister }) =>
      this.#modalContent.removeEventListener(type, lister)
    );

    if (executeCallback) {
      this.#onCloseCallback.forEach(callback => callback());
    }

    this.#modal.close();
    overlay.hide();
  }

  setContent(content) {
    this.#modalContent.innerHTML = '';
    this.#modalContent.insertAdjacentHTML('beforeend', content);
  }

  addContentListener(type, lister) {
    this.#contentEventListeners.push({ type, lister });

    this.#modalContent.addEventListener(type, lister);
  }

  addOnCloseCallback(callback) {
    this.#onCloseCallback.push(callback);
  }
}
