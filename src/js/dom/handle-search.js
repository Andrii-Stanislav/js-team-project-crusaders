import getExercises from '../api/get-exercises';

import createExercisesMarkup from './create-exercises-markup';

import clearElement from './clear-element';

import { exercisesContainer, searchInputElement } from '../refs';

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
    clearElement(searchInputElement);
    return;
  }

  const responseData = await getExercises(filter, searchInputValue);

  // Render exercises list
  createExercisesMarkup(exercisesContainer, responseData);
}
