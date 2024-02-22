import { refs } from '../refs';

import clearElement from '../dom/clear-element';

// Check user clicks on clear button in search
export default refs.searchClearButton.addEventListener('click', e => {
  clearElement(refs.searchInputElement);
});
