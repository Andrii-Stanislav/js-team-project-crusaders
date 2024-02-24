const CURRENT_EXERCISES_FILTER_PAGE = 'current-exercises-filter-page';
const CURRENT_EXERCISES_FILTER_KEYWORD = 'current-exercises-filter-keyword';
const CURRENT_EXERCISES_GROUP_NAME = 'current-exercises-group-name';
const IS_OPENED_EXERCISES_LIST = 'is-opened-exercises-list';

export const filtersService = {
  checkIsOpenExercisesList: () => {
    return sessionStorage.getItem(IS_OPENED_EXERCISES_LIST) === 'true';
  },
  openExercisesList: () => {
    sessionStorage.setItem(IS_OPENED_EXERCISES_LIST, 'true');
  },
  closeExercisesList: () => {
    sessionStorage.setItem(IS_OPENED_EXERCISES_LIST, 'false');
  },

  exercisesFilters: {
    set: filter => {
      sessionStorage.setItem(CURRENT_EXERCISES_FILTER_KEYWORD, filter);
    },
    get: () => {
      return (
        sessionStorage.getItem(CURRENT_EXERCISES_FILTER_KEYWORD) ?? 'Muscles'
      );
    },
  },

  exercisesGroups: {
    set: name => {
      sessionStorage.setItem(CURRENT_EXERCISES_GROUP_NAME, name);
    },
    get: () => {
      return sessionStorage.getItem(CURRENT_EXERCISES_GROUP_NAME) ?? '';
    },
  },

  exercisesFiltersTable: {
    setPage: page => {
      sessionStorage.setItem(CURRENT_EXERCISES_FILTER_PAGE, page.toString());
    },
    getPage: () => {
      const value = sessionStorage.getItem(CURRENT_EXERCISES_FILTER_PAGE);
      return value ? Number(value) : 1;
    },
  },
};
