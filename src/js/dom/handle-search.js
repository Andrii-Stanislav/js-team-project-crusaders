import { getExercisesByKeyword } from '../api/get-exercises-by-keyword';

import { refs } from '../refs';
import { filtersService } from '../storage/filters';
import renderExercisesList from './render-exercises-list';

export default async function handleSearchSubmit(element) {
  // Prevent page reload
  element.preventDefault();

  let filter = filtersService.exercisesFilters.get().toLowerCase();
  let group = filtersService.exercisesGroups.get().toLowerCase();

  filter = filter.toLowerCase().split(' ').join('');
  if (filter === 'bodyparts') {
    filter = filter.slice(0, -1);
  }
  group = group.toLowerCase();
  // Show error message if filter are not configured
  if (!filter && !group) {
    console.error('Filter are not configured');
    return;
  }

  // Clear spaces and capital letters from user input
  const keyword =
    element.currentTarget.elements.search.value.trim().toLowerCase() ?? '';

  const responseData = await getExercisesByKeyword({
    filter,
    group,
    keyword,
  });

  // Render exercises list
  renderExercisesList(refs.exercisesContainer, responseData);
}
