import { refs } from '../refs';

import clearElement from '../helper/clear-element';

export default refs.searchClearButton.addEventListener('click', e => {
  clearElement(refs.searchInputElement);
});
