export const refs = {
  body: document.querySelector('body'),
  // quote
  quoteElement: document.querySelector('.quote-text'),
  authorElement: document.querySelector('.quote-author'),
  quoteCard: document.querySelector('.quote-card'),
  // exercises filters
  exercisesFiltersList: document.querySelector('.js-exercises-filters-list'),
  exercisesFiltersTabs: document.getElementById('exercises-filters-tabs'),
  exercisesFiltersTabsList: document.querySelectorAll('.exercises-filters-tab'),
  exercisesFiltersPagination: document.getElementById(
    'exercises-filters-pagination'
  ),
  // exercises search
  searchInputElement: document.querySelector('.search-input'),
  searchClearButton: document.querySelector('.button-clear'),
  searchFormElement: document.querySelector('.search-form'),
  // exercises
  exercisesContainer: document.querySelector('.exercises-container'),
  breadcrumbsText: document.querySelector('.breadcrumbs-subtitle'),
  breadcrumbsDivider: document.querySelector('.breadcrumbs-divider'),
  mainExercisesPagination: document.getElementById('main-exercises-pagination'),
  // favorites
  containerFavorites: document.querySelector('.favorites-exercises-list'),
  // footer
  footerEmailInput: document.getElementById('mailing-email'),
  footerSubscribeForm: document.querySelector('.js-footer-newsletter-form'),
  // header
  listItems: document.querySelectorAll('.nav-list-item'),
};
