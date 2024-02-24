import { refs } from '../refs';

import { filtersService } from '../storage/filters';

document.addEventListener('DOMContentLoaded', () => {
  const currentKeyword = filtersService.exercisesTable.getKeyword();

  refs.searchInputElement.value = currentKeyword ?? '';
});
