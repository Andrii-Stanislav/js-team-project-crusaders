import { refs } from '../refs';

const currentUrl = window.location;
const defaultPageName = 'home';

refs.listItems.forEach((item) => {
  const link = item.querySelector('a');

  if ((currentUrl.pathname.endsWith('/'))
    && link.textContent.toLocaleLowerCase() === defaultPageName) {
    item.classList.add('nav-selected');

    return;
  }

  if (link.href === currentUrl.href) {
    item.classList.add('nav-selected');
  }
});
