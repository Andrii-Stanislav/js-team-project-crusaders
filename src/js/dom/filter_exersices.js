import Pagination from 'tui-pagination';

import { fetchFilters } from '../api/fetch-filters';
import { filtersService } from '../storage/filters';
import { refs } from '../refs';

const initPage = filtersService.exercisesFiltersTable.getPage();
const initFilter = filtersService.exercisesFilters.get();

// initial fetch and setup pagination
getInitFiltersExercises({ page: initPage, filter: initFilter });

// set initFilter;
refs.exercisesFiltersTabsList.forEach(elem => {
  const textContent = elem.textContent.trim();
  if (textContent === initFilter) {
    elem.classList.add('active');
  }
});

function getInitFiltersExercises({ page, filter }) {
  fetchFilters({ page, filter }).then(
    ({ data: { results, page, perPage, totalPages } }) => {
      const pagination = new Pagination('exercises-filters-pagination', {
        page: Number(page),
        itemsPerPage: perPage,
        totalItems: totalPages * perPage,
      });

      pagination.on('beforeMove', function (eventData) {
        const currentFilter = filtersService.exercisesFilters.get();

        getFiltersExercisesForNewPage(currentFilter, eventData.page);
        filtersService.exercisesFiltersTable.setPage(eventData.page);
      });

      displayExercises(results);
    }
  );
}

function getFiltersExercisesForNewPage(filter, page) {
  fetchFilters({ page, filter }).then(({ data }) => {
    displayExercises(data.results);
    scrollToTop();
  });
}

function displayExercises(results) {
  refs.exercisesFiltersList.innerHTML = '';

  const markup = results
    .map(
      ({ filter, name, imgURL }) => `
  <li class="filters__item">
    <img class="filters__img-first" src="${imgURL}"></img>
    <div class="filters__wrapper-first">
    <h2 class="filters__title-first">${filter}</h2>
    <p class="filters__text-first">${name}</p>
    </div>
  </li>
    `
    )
    .join('');

  refs.exercisesFiltersList.insertAdjacentHTML('beforeend', markup);
}

// filter tabs logic

refs.exercisesFiltersTabs.addEventListener('click', event => {
  refs.exercisesFiltersTabsList.forEach(elem => {
    elem.classList.remove('active');
  });

  event.target.classList.add('active');

  const newFilter = event.target.textContent.trim();
  refs.exercisesFiltersList.innerHTML = '';

  filtersService.exercisesFilters.set(newFilter);
  filtersService.exercisesFiltersTable.setPage(1);

  getInitFiltersExercises({ page: 1, filter: newFilter });
});

function scrollToTop() {
  window.scrollTo({
    top: 830,
    behavior: 'auto',
  });
}
