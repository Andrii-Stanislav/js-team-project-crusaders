import { refs } from '../refs';
import { overlay } from './overlay.js';

export default class Loader {
  static #instance;
  #loader;
  #isShow = false;

  constructor() {
    this.#loader = refs.loader;
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
    overlay.show();
  }

  static hide() {
    if (!Loader.#instance.#isShow) {
      return;
    }

    Loader.#instance.#isShow = false;
    Loader.#instance.#loader.classList.add('visually-hidden');
    overlay.hide();
  }
}
