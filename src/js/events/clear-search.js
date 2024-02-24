import { refs } from '../refs';

import { filtersService } from '../storage/filters';
import initialExerciseList from './initial-exercise-list';

import clearElement from '../helper/clear-element';

export default refs.searchClearButton.addEventListener('click', e => {
  clearElement(refs.searchInputElement);

  filtersService.exercisesTable.setKeyword('');
  filtersService.exercisesTable.setPage(1);

  initialExerciseList();
});
