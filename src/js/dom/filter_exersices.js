import Pagination from 'tui-pagination';

import { fetchFilters } from '../api/fetch-filters';
import { filtersService } from '../storage/filters';
import { refs } from '../refs';
import { closeExercisesList } from '../helper/control-lists-view';
import { addPagination } from '../helper/add-pagination.js';

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
      addPagination(
        'exercises-filters-pagination',
        {page, perPage, totalPages},
        newPage => {
            const currentFilter = filtersService.exercisesFilters.get();

            getFiltersExercisesForNewPage(currentFilter, newPage);
            filtersService.exercisesFiltersTable.setPage(newPage);
          },
        );

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
    .map(({ filter, name, imgURL }) => {
      const dataFilter = `data-filter="${filter}"`;
      const dataGroupName = `data-group="${name}"`;

      return `
  <li class="filters__item" ${dataFilter} ${dataGroupName}>
    <img class="filters__img-first" src="${imgURL}"  ${dataFilter} ${dataGroupName}></img>
    <div class="filters__wrapper-first" ${dataFilter}${dataGroupName}>
    <h2 class="filters__title-first" ${dataFilter} ${dataGroupName}>${name}</h2>
    <p class="filters__text-first" ${dataFilter} ${dataGroupName}>${filter}</p>
    </div>
  </li>
    `;
    })
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
  closeExercisesList();

  filtersService.exercisesFilters.set(newFilter);
  filtersService.exercisesFiltersTable.setPage(1);
  filtersService.exercisesTable.setPage(1);

  getInitFiltersExercises({ page: 1, filter: newFilter });
});

function scrollToTop() {
  window.scrollTo({
    top: 830,
    behavior: 'auto',
  });
}
