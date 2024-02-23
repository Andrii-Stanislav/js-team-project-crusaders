import { refs } from '../refs';

import { openExercisesList } from '../helper/control-lists-view';

refs.exercisesFiltersList.addEventListener('click', e => {
  const data = e.target.dataset.filter;
  if (data) {
    openExercisesList();
  }
});
