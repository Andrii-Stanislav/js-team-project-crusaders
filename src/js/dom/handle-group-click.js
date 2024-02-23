import { getExercisesByKeyword } from '../api/get-exercises-by-keyword';
import renderExercisesList from './render-exercises-list';
import { refs } from '../refs';

export default async function handleGroupClick(container, filter, group) {
  const responseData = await getExercisesByKeyword({ filter, group });

  // Render exercises list
  renderExercisesList(container, responseData);
}
