import { getExercisesByKeyword } from '../api/get-exercises-by-keyword';
import renderExercisesList from './render-exercises-list';
import { refs } from '../refs';
import addText from '../helper/add-text';

export default async function handleGroupClick(container, filter, group) {
  const responseData = await getExercisesByKeyword({ filter, group });

  addText(refs.breadcrumbsText, group, refs.breadcrumbsDivider);
  // Render exercises list
  renderExercisesList(container, responseData.data.results);
}
