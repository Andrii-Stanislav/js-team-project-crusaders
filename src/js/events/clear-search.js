import { refs } from '../refs';
import { getExercisesByKeyword } from '../api/get-exercises-by-keyword';
import renderExercisesList from '../dom/render-exercises-list';
import { filtersService } from '../storage/filters';

import clearElement from '../helper/clear-element';

export default refs.searchClearButton.addEventListener('click', e => {
  clearElement(refs.searchInputElement);

  const filter = filtersService.exercisesFilters.get().toLowerCase();
  const group = filtersService.exercisesGroups.get().toLowerCase();

  getExercisesByKeyword({
    filter,
    group,
    keyword: '',
  }).then(responseData => {
    renderExercisesList(refs.exercisesContainer, responseData);
  });
});
