import { refs } from '../refs';
import { favoritesStorage } from '../storage/favorites';

const ADD_TO_FAVORITES_BUTTON_CLASS = 'addToFavoritesButton';

refs.body.addEventListener('click', e => {
  if (
    Array.from(e.target?.classList)?.includes(ADD_TO_FAVORITES_BUTTON_CLASS) &&
    e.target?.dataset?.info
  ) {
    favoritesStorage.add(e.target.dataset.info);
  }
});

// TODO before saving data to html data-info replaceAll all single quotes
// 'JSON.stringify(item).replaceAll("'", '&apos;')'
