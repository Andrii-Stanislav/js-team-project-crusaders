import { initialFavoriteList } from '../dom/favorites';
import { favoritesStorage } from '../storage/favorites';
import { refs } from '../refs';

refs.favoriteContainer.addEventListener('click', e => {
  if (
    e.target.dataset.id &&
    Array.from(e.target.classList).includes('js-button-favorites-delete')
  ) {
    favoritesStorage.remove(e.target.dataset.id);
    initialFavoriteList();
  }
});
