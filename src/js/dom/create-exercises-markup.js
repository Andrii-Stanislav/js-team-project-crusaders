import spriteUrl from './../../images/svg/icons.svg';

export default function createExercisesMarkup(data, isFavorite) {
  return data
    .map(
      ({
        _id,
        bodyPart,
        target,
        rating,
        burnedCalories,
        time,
        name,
      }) => `<li id="${_id}" class="exercise-item">
    <div class="exercise-top-container">
      <div class="exercise-top-info">
        <p class="exercise-tag">Workout</p>
        <div class="exercise-custom-block">
        ${
          isFavorite
            ? `<button class="exercise-button-delete js-button-favorites-delete" data-id="${_id}">
              <svg class="trash-icon js-button-favorites-delete" data-id="${_id}">
                <use class="js-button-favorites-delete" href="${spriteUrl}#icon-trash" data-id="${_id}"></use>
              </svg>
            </button>`
            : `<p class="exercise-rating">
              ${rating}
              <svg class="rating-icon">
                <use href="${spriteUrl}#icon-star-yellow"></use>
              </svg>
            </p>`
        }
        </div>
      </div>
      <button type="menu" class="exercise-start-button" data-id="${_id}">
        Start
        <svg class="button-icon icon-arrow">
          <use href="${spriteUrl}#icon-arrow"></use>
        </svg>
      </button>
    </div>
    <div class="exercise-title-container">
      <span class="exercise-icon-container">
        <svg class="exercise-icon">
          <use href="${spriteUrl}#icon-man"></use>
        </svg>
      </span>
      <h3 class="exercise-title">${name}</h3>
    </div>
    <div class="exercise-bottom-container">
      <p class="exercise-info">
        Burned calories: <mark class="exercise-marked-text">${burnedCalories} / ${time} min</mark>
      </p>
      <p class="exercise-info">
        Body part: <mark class="exercise-marked-text exercise-info-text">${bodyPart}</mark>
      </p>
      <p class="exercise-info">
        Target: <mark class="exercise-marked-text exercise-info-text">${target}</mark>
      </p>
    </div>
  </li>`
    )
    .join('');
}
