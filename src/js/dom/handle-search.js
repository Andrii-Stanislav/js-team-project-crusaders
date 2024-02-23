import iziToast from 'izitoast';

import { getExercisesByKeyword } from '../api/get-exercises-by-keyword';
import clearElement from '../helper/clear-element';
import { refs } from '../refs';
import { filtersService } from '../storage/filters';
import renderExercisesList from './render-exercises-list';

export default async function handleSearchSubmit(element) {
  element.preventDefault();

  let filter = filtersService.exercisesFilters.get().toLowerCase();
  let group = filtersService.exercisesGroups.get().toLowerCase();

  filter = filter.toLowerCase().split(' ').join('');

  if (filter === 'bodyparts') {
    filter = filter.slice(0, -1);
  }

  group = group.toLowerCase();

  if (!filter && !group) {
    iziToast.error({
      title: 'Error',
      message: 'Filter are not configured',
    });

    return;
  }

  const keyword = element.currentTarget.elements.search.value
    .trim()
    .toLowerCase();

  if (!keyword) {
    iziToast.error({
      title: 'Error',
      message: 'You have to write a search query',
    });

    clearElement(refs.searchInputElement);

    return;
  }

  try {
    const responseData = await getExercisesByKeyword({
      filter,
      group,
      keyword,
    });

    if (!responseData.data.results.length || !responseData) {
      clearElement(refs.searchInputElement);
    }

    renderExercisesList(refs.exercisesContainer, responseData);
  } catch (e) {
    // do nothing
  }
}
