import { favoritesStorage } from '../storage/favorites';
import { favoritesFiltersService } from '../storage/favorites-filters';
import renderExercisesList from './render-exercises-list';

import { refs } from '../refs';
import { addPagination } from '../helper/add-pagination.js';
import createExercisesMarkup from './create-exercises-markup.js';

const PER_PAGE = 10;

export const initialFavoriteList = () => {
  const favoriteExercises = favoritesStorage.getAll();

  if (favoriteExercises.length === 0 ) {
    refs.containerFavorites.insertAdjacentHTML(
      'afterbegin',
      "<div class='favorite-exercises-empty-text-container'>" +
        "<p class='favorite-exercises-empty-text'>" +
          "It appears that you haven't added any exercises to your favorites" +
          " yet. To get started, you can add exercises that you like to your" +
          " favorites for easier access in the future. " +
        "</p>" +
      "</div>",
    );

    return;
  }

  const currentPage = favoritesFiltersService.getPage();

  const favoriteExercisesPage = favoriteExercises.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  renderExercisesList(refs.containerFavorites, favoriteExercisesPage, true);

  addPagination(
    'favorites-exercises-pagination',
    {
      page: currentPage,
      perPage: PER_PAGE,
      totalPages: Math.ceil(favoriteExercises.length / PER_PAGE),
    },
    newPage => {
      favoritesFiltersService.setPage(newPage);
      initialFavoriteList();
      window.scrollTo({
        top: 300,
        behavior: 'auto',
      });
    }
  );
};

initialFavoriteList();
