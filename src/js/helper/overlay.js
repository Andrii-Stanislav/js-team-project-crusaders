import { refs } from '../refs.js';

const overlayElement = refs.overlay;

const show = () => {
  overlayElement.classList.remove('visually-hidden');
}

const hide = () => {
  overlayElement.classList.add('visually-hidden');
}

export const overlay = {
  show,
  hide
}
