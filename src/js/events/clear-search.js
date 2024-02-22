import { searchInputElement, searchClearButton } from '../refs';

import clearElement from '../dom/clear-element';

// Check user clicks on clear button in search
export default searchClearButton.addEventListener('click', e => {
  clearElement(searchInputElement);
});
