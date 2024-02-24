export default class Loader {
  static #instance;
  #loader;
  #isShow = false;

  constructor() {
    this.#loader = document.querySelector('.loader-container');
  }

  static init() {
    if (!Loader.#instance) {
      Loader.#instance = new Loader();
    }
  }

  static show() {
    if (Loader.#instance.#isShow) {
      return;
    }

    Loader.#instance.#isShow = true;
    Loader.#instance.#loader.classList.remove('visually-hidden');
  }

  static hide() {
    if (!Loader.#instance.#isShow) {
      return;
    }

    Loader.#instance.#isShow = false;
    Loader.#instance.#loader.classList.add('visually-hidden');
  }
}
