import { refs } from '../refs';

import handleSearchSubmit from '../dom/handle-search';

export default refs.searchFormElement.addEventListener('submit', e => {
  handleSearchSubmit(e);
});
