import { searchFormElement } from '../refs';

import handleSearchSubmit from '../dom/handle-search';

// Check submit events of search form
export default searchFormElement.addEventListener('submit', e => {
  handleSearchSubmit(e, localStorage.getItem('filter'));
});
