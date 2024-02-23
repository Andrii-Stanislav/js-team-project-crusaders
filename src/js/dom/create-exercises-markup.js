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
            ? `<button class="exercise-button-delete">
              <svg class="trash-icon">
                <use href="images/svg/icons.svg#icon-trash"></use>
              </svg>
            </button>`
            : `<p class="exercise-rating">
              ${rating}
              <svg class="rating-icon">
                <use href="images/svg/icons.svg#icon-star-yellow"></use>
              </svg>
            </p>`
        }
        </div>
      </div>
      <button type="menu" class="exercise-start-button">
        Start
        <svg class="button-icon icon-arrow">
          <use href="images/svg/icons.svg#icon-arrow"></use>
        </svg>
      </button>
    </div>
    <div class="exercise-title-container">
      <span class="exercise-icon-container">
        <svg class="exercise-icon">
          <use href="images/svg/icons.svg#icon-man"></use>
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
