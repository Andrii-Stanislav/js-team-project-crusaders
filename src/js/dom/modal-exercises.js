import spriteUrl from './../../images/svg/icons.svg';
import { fetchExercise } from '../api/fetch-exercise';
import Modal from '../helper/modal';
import modalExerciseRating from './modal-exercise-rating';

// document.getElementById('open-modal').addEventListener('click', () => {
//   modalExercises('64f389465ae26083f39b17a5');
// });

export async function modalExercises(id) {
  const modal = new Modal();

  function favouritesButtonHandler(event) {
    if (event.target.closest('.modal-exercises__button-favourites')) {
      // handleClickFavoritesBtn(cardData);
    }
  }

  function ratingButtonHandler(event) {
    if (event.target.closest('.modal-exercises__button-rating')) {
      modal.close()
      modalExerciseRating(id);
    }
  }

  try {
    const cardData = await fetchExercise(id);

    modal.setContent(createModalExercisesMarkup({
      ...cardData,
      rating: Number(cardData.rating).toFixed(1),
    }));

    modal.addContentListener('click', favouritesButtonHandler)
    modal.addContentListener('click', ratingButtonHandler)

    modal.open();
  } catch (error) {
    console.error(error);
  }
}

function createModalExercisesMarkup(cardData) {
  const {
    name,
    burnedCalories,
    bodyPart,
    description,
    target,
    equipment,
    gifUrl,
    popularity,
    rating,
    time,
    _id,
  } = cardData;

  return `<div class="modal-exercises__card" >
    <div class="modal-exercises__image-wrapper">
      <img class="modal-exercises__image" src="${
        gifUrl !== null ? gifUrl : noImageUrl
      }" alt="${name}" />
    </div>
    <div class="modal-exercises__description">
      <p class="modal-exercises__name">${name}</p>
      <div id="rating" class="modal-exercises__rating">
        <div class="modal-exercises__rating-value">${rating}</div>
        <span class="modal-exercises__rating-star" data-value="1">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="2">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="3">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="4">&#9733;</span>
        <span class="modal-exercises__rating-star" data-value="5">&#9733;</span>
      </div>
      <div class="modal-exercises__partials">
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Target</p>
          <p class="modal-exercises__partials-value">${target}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Body Part</p>
          <p class="modal-exercises__partials-value">${bodyPart}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Equipment</p>
          <p class="modal-exercises__partials-value">${equipment}</p>
        </div>
        <div class="modal-exercises__partials-title">
          <p class="modal-exercises__partials-title">Popular</p>
          <p class="modal-exercises__partials-value">${popularity}</p>
        </div>
        <div class="modal-exercises__partials-item">
          <p class="modal-exercises__partials-title">Burned calories</p>
          <p class="modal-exercises__partials-value">${burnedCalories}/${time}
            <span class="modal-exercises__partials-value_span">min</span>
          </p>
        </div>
      </div>
      <p class="modal-exercises__text">
        ${description}
      </p>
      <div class="modal-exercises__buttons">
      ${
        false
          ? `<button
          type="button"
          class="modal-exercises__button-favourites unfavorite-btn"
          >
          Unfavorite
          <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${spriteUrl}#icon-trash></use>
          </svg>`
          : `<button
          type="button"
          class="modal-exercises__button-favourites
          add-to-favorites-btn">
          Add to favorites
          <svg
            class="modal-exercises__button-favourites_icon"
            aria-label='heart'
            width="20"
            height="20"
          >
            <use href=${spriteUrl}#icon-heart></use>
          </svg>`
      }
        </button>
        <button class="modal-exercises__button-rating" data-value="${_id}">Give a rating</button>
      </div>
    </div>
    </div>`;
}

export function handleRatingCick(id) {

}

// const exercisesListRef = document.getElementById('exercises-list-container');

// if (exercisesListRef) {
//   exercisesListRef.addEventListener('click', onExerciseListClick);
// }

// export function onExerciseListClick(event) {

//   if (!event.target.closest('[data-id]')) {
//     return;
//   }

//   const id = event.target.closest('[data-id]').dataset.id;
//   modalExercises('64f389465ae26083f39b17a5');
// }



// export const handleClickFavoritesBtn = cardData => {
//   const favoriteButton = document.querySelector(
//     '.modal-exercises__button-favourites'
//   );
//   const isFavorite = isFavorite(cardData._id)
//   if (!isFavorite) {
//     // TODO: addFavoriteCardToLocal(cardData);

//     favoriteButton.innerHTML = `Unfavorite
//     <svg
//             class="modal-exercises__button-favourites_icon unfavorite-btn"
//             aria-label='heart'
//             width="20"
//             height="20"
//           >
//             <use href=${spriteUrl}#icon-trash></use>
//           </svg>`;

//     return;
//   }

//   // TODO: removeFavoriteCardFromLocal(cardData._id);

//   favoriteButton.innerHTML = `Add to favorites
//           <svg
//             class="modal-exercises__button-favourites_icon add-to-favorites-btn"
//             aria-label='heart'
//             width="20"
//             height="20"
//           >
//             <use href=${spriteUrl}#icon-heart></use>
//           </svg>`;

//   return;
// };

