export const refs = {
  body: document.querySelector('body'),
  // heder-mobile-menu
  openMobileMenuBtn: document.querySelector('[data-menu-open]'),
  closeMobileModalBtn: document.querySelector('[data-menu-close]'),
  mobileMenuRef: document.querySelector('[data-menu-backdrop]'),
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
  mainExercisesPagination: document.getElementById('main-exercises-pagination'),
  // favorites
  favoriteContainer: document.querySelector('.favorites-exercises-list'),
  // breadcrumbs
  breadcrumbsText: document.querySelector('.breadcrumbs-subtitle'),
  breadcrumbsDivider: document.querySelector('.breadcrumbs-divider'),
  // favorites
  containerFavorites: document.querySelector('.favorites-exercises-list'),
  // footer
  footerEmailInput: document.getElementById('mailing-email'),
  footerSubscribeForm: document.querySelector('.js-footer-newsletter-form'),
  // header
  listItems: document.querySelectorAll('.nav-list-item'),
  // button to top
  returnToTop: document.getElementById('returnToTop'),
  // loader
  loader: document.querySelector('.loader'),
  overlay: document.querySelector('.overlay'),

  modalDialog: document.getElementById('modalDialog'),
  closeModalBtn: document.querySelector('.button-close'),
  modalContent: document.getElementById('modal-content'),
};
