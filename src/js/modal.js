import spriteUrl from '../css/icons.svg';
import { fetchExercise } from './api/fetch-exercise';
export class Modal {
  constructor() {
    this.modal = document.getElementById('modalDescription');
    this.closeBtn = document.querySelector('.button-close');
    this.modalContent = document.querySelector('.modal-exercises__card');

    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);

    this.init();
  }

  init() {
    this.closeBtn.addEventListener('click', this.handleCloseButtonClick);
    this.modal.addEventListener('click', this.handleModalClick);
  }

  handleCloseButtonClick() {
    this.close();
  }

  handleModalClick(event) {
    if (event.target == this.modal) {
      this.close();
    }
  }

  open() {
    this.modal.showModal();
  }

  close() {
    this.modal.close();
  }

  destroy() {
    this.closeBtn.removeEventListener('click', this.handleCloseButtonClick);
    this.modal.removeEventListener('click', this.handleModalClick);
  }
}

document.getElementById('open-modal').addEventListener('click', () => {
  modalExercises('64f389465ae26083f39b17a5');
});

export async function modalExercises(id, fn) {
  const myModal = new Modal();

  try {
    const cardData = await fetchExercise(id);

    myModal.modalContent.innerHTML = '';

    myModal.modalContent.insertAdjacentHTML(
      'beforeend',
      createModalExercisesMarkup({
        ...cardData,
        rating: Number(cardData.rating).toFixed(1),
      })
    );
    myModal.open();

    myModal.modalContent.addEventListener('click', event => {
      if (event.target.closest('.modal-exercises__button-favourites')) {
        // handleClickFavoritesBtn(cardData);
        console.log('tyt');
      }
    });
  } catch (error) {
    console.error(error);
  }
}

export function createModalExercisesMarkup(cardData) {
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

  return `
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
    </div>`;
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


// export const getFromLocal = key => {
//   try {
//     const storedItem = localStorage.getItem(key);

//     if (storedItem) {
//       return JSON.parse(storedItem);
//     }

//     return null;
//   } catch (error) {
//     console.error('Error get localStorage:', error);
//     return null;
//   }
// };

// const checkIsFavourite = (data = getFromLocal('favorites') || []) => {
//   return data.find(item => item?._id === cardData._id);
// };

// export const handleClickFavoritesBtn = () => {
//   const favoriteButton = document.querySelector(
//     '.modal-exercises__button-favourites'
//   );

//   if (!checkIsFavourite()) {
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

