import { getExercisesByKeyword } from '../api/get-exercises-by-keyword';

import clearElement from '../helper/clear-element';

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
  const keyword = element.currentTarget.elements.search.value
    .trim()
    .toLowerCase();

  // Check if somesthing was written in search
  if (!keyword) {
    // Show message for user that search keyword wasn't typed
    alert('You have to write a search query');
    // Clear search input
    clearElement(refs.searchInputElement);
    return;
  }

  const responseData = await getExercisesByKeyword({
    filter,
    group,
    keyword,
  });

  if (!responseData.data.results.length || !responseData) {
    // Clear input if nothing found
    clearElement(refs.searchInputElement);
  }

  // Render exercises list
  renderExercisesList(refs.exercisesContainer, responseData);
}
