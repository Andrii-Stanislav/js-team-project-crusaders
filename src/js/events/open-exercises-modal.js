import { modalExercises } from '../dom/modal-exercises';
import { refs } from '../refs';

refs.exercisesContainer.addEventListener('click', e => {
  if (
    e.target.dataset.id &&
    Array.from(e.target.classList).includes('exercise-start-button')
  ) {
    modalExercises(e.target.dataset.id);
  }
});
