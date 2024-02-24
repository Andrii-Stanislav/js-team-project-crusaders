const CURRENT_FAVORITE_EXERCISES_PAGE = 'current-favorite-exercises-page';

export const favoritesFiltersService = {
  setPage: page => {
    sessionStorage.setItem(CURRENT_FAVORITE_EXERCISES_PAGE, page.toString());
  },
  getPage: () => {
    const value = sessionStorage.getItem(CURRENT_FAVORITE_EXERCISES_PAGE);
    return value ? Number(value) : 1;
  },
};
