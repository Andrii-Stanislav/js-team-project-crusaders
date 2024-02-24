import { favoritesStorage } from '../storage/favorites';
import { favoritesFiltersService } from '../storage/favorites-filters';
import renderExercisesList from './render-exercises-list';
import { setExercisesPagination } from './exercises-pagination';

import { refs } from '../refs';

const PER_PAGE = 10;

export const initialFavoriteList = () => {
  const favoriteExercises = favoritesStorage.getAll();

  const currentPage = favoritesFiltersService.getPage();

  const favoriteExercisesPage = favoriteExercises.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  renderExercisesList(refs.containerFavorites, favoriteExercisesPage, true);

  setExercisesPagination(
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
