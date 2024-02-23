import { refs } from '../refs';

const currentUrl = window.location.href;

refs.listItems.forEach((item) => {
  const link = item.querySelector('a');

  if (link.href === currentUrl) {
    item.classList.add('nav-selected');
  }
});
