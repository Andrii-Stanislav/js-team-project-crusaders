import { refs } from '../refs';
import { filtersService } from '../storage/filters';

export const openExercisesList = () => {
  filtersService.openExercisesList();
  refs.exercisesFiltersList.classList.add('visually-hidden');
  refs.exercisesFiltersPagination.classList.add('visually-hidden');
  refs.searchFormElement.classList.remove('visually-hidden');
  refs.exercisesContainer.classList.remove('visually-hidden');
};

export const closeExercisesList = () => {
  filtersService.closeExercisesList();
  refs.exercisesFiltersList.classList.remove('visually-hidden');
  refs.exercisesFiltersPagination.classList.remove('visually-hidden');
  refs.searchFormElement.classList.add('visually-hidden');
  refs.exercisesContainer.classList.add('visually-hidden');
};
