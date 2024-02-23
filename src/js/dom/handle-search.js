import { getExercisesByKeyword } from '../api/get-exercises-by-keyword';

import clearElement from '../helper/clear-element';

import { refs } from '../refs';
import renderExercisesList from './render-exercises-list';

export default async function handleSearchSubmit(element, filter) {
  // Prevent page reload
  element.preventDefault();
  // Show error message if filter are not configured
  if (!filter) {
    console.error('Filter are not configured');
    return;
  }

  // Clear spaces and capital letters from user input
  const searchInputValue = element.currentTarget.elements.search.value
    .trim()
    .toLowerCase();

  // Check if somesthing was written in search
  if (!searchInputValue) {
    // Show message for user that search keyword wasn't typed
    alert('You have to write a search query');
    // Clear search input
    clearElement(refs.searchInputElement);
    return;
  }

  const responseData = await getExercisesByKeyword(filter, searchInputValue);

  if (!responseData.data.results.length || !responseData) {
    // Clear input if nothing found
    clearElement(refs.searchInputElement);
  }

  // Render exercises list
  renderExercisesList(element, responseData);
}
