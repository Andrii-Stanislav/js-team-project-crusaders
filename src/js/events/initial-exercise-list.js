import { filtersService } from '../storage/filters';

import { refs } from '../refs';

import { getExercisesByKeyword } from '../api/get-exercises-by-keyword';
import renderExercisesList from '../dom/render-exercises-list';

export default async function initialExercisesList() {
  let filter = filtersService.exercisesFilters.get();
  let group = filtersService.exercisesGroups.get();

  filter = filter.toLowerCase().split(' ').join('');
  if (filter === 'bodyparts') {
    filter = filter.slice(0, -1);
  }
  group = group.toLowerCase();

  const responseData = await getExercisesByKeyword({ filter, group });
  // Render exercises list
  renderExercisesList(refs.exercisesContainer, responseData);
}

initialExercisesList();
