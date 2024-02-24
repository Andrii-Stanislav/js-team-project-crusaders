import createExercisesMarkup from './create-exercises-markup';

export default function renderExercisesList(
  domContainer,
  exercisesList,
  isFavorite = false
) {
  // Clear list in DOM before each request
  domContainer.innerHTML = '';
  // Check if data received
  if (exercisesList?.length === 0 || !exercisesList) {
    // Insert message in UI
    domContainer.insertAdjacentHTML(
      'afterbegin',
      `<li class="list-item-error">
        We haven't found exercises. Please try another search term
    </li>`
    );
    return;
  }
  // Insert list after the container open tag
  domContainer.insertAdjacentHTML(
    'afterbegin',
    createExercisesMarkup(exercisesList, isFavorite)
  );
}
