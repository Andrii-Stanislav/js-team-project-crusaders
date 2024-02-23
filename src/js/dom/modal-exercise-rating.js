import spriteUrl from './../../images/svg/icons.svg';
import Modal from '../helper/modal';
import { modalExercises } from './modal-exercises';
import { updateExerciseRating } from '../api/update-exercise-rating';

const getMarkup = () => {
  return `
    <form name="exercise-rating-form" class="exercise-rating-form">
      <div class="exercise-rating-form__star-container">
        <h2 class="exercise-rating-form__star-title">Rating</h2>
        <div class="exercise-rating-form__stars">
          <input
            type="radio"
            class="exercise-rating-form__star"
            name="rate"
            id="rating-5"
            value="5"
          >
          <label class="exercise-rating-form__star-label" for="rating-5">
            <svg width="24" height="24">
              <use href="${spriteUrl}#icon-star"></use>
            </svg>
          </label>
          <input
            type="radio"
            class="exercise-rating-form__star"
            name="rate"
            id="rating-4"
            value="4"
           >
          <label class="exercise-rating-form__star-label" for="rating-4">
            <svg width="24" height="24">
              <use href="${spriteUrl}#icon-star"></use>
            </svg>
          </label>
          <input
            type="radio"
            class="exercise-rating-form__star"
            name="rate"
            id="rating-3"
            value="3"
           >
           <label class="exercise-rating-form__star-label" for="rating-3">
            <svg width="24" height="24">
              <use href="${spriteUrl}#icon-star"></use>
            </svg>
          </label>
          <input
            type="radio"
            class="exercise-rating-form__star"
            name="rate"
            id="rating-2"
            value="2"
           >
            <label class="exercise-rating-form__star-label" for="rating-2">
            <svg width="24" height="24">
              <use href="${spriteUrl}#icon-star"></use>
            </svg>
          </label>
          <input
            type="radio"
            class="exercise-rating-form__star"
            name="rate"
            id="rating-1"
            value="1"
           >
          <label class="exercise-rating-form__star-label" for="rating-1">
            <svg width="24" height="24">
              <use href="${spriteUrl}#icon-star"></use>
            </svg>
          </label>
          <span class="exercise-rating-form__star-counter"></span>
        </div>
      </div>

      <div class="input-group">
        <input
          class="form-input"
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          pattern="^\\w+(\\.\\w+)?@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$"
          autocomplete="off"
          required
        />

        <textarea
          class="form-textarea"
          name="comment"
          placeholder="Your comment"
          rows="5"
          aria-label="Comment"
          autocomplete="off"
          required
        ></textarea>
      </div>
      <button class="exercise-rating-form-button" type="submit">Send</button>
    </form>
  `;
}

export default function modalExerciseRating(exerciseId) {
  const modal = new Modal();

  modal.addOnCloseCallback(() => modalExercises(exerciseId));

  const handleSubmit = async (event) => {
    if (event.target.closest('.exercise-rating-form')) {
      event.preventDefault();

      const { rate, email, comment } = event.target.elements;

      const rateNumber = Number(rate.value);

      try {
        await updateExerciseRating(
          exerciseId,
          rateNumber,
          email.value,
          comment.value
        )

        modal.close();
      } catch (error) {
        // do nothing
      }
    }
  }

  modal.setContent(getMarkup());
  modal.addContentListener('submit', handleSubmit);
  modal.open();
}
