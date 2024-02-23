import { refs } from '../refs';
t;
import { getExercisesByKeyword } from '../api/get-exercises-by-keyword';
import renderExercisesList from './render-exercises-list';

export default async function handleGroupClick(event, container) {
  const filter = event.currentTarget.dataset.filter;
  const group = event.currentTarget.dataset.group;

  const responseData = await getExercisesByKeyword({ [filter]: group });

  // Render exercises list
  renderExercisesList(container, responseData);

  // Reveal search form
  refs.searchFormElement.classList.remove('search-visually-hidden');
}
