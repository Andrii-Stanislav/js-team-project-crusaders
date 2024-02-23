import { fetchFilters } from './api/fetch-filters';

const listItem = document.querySelector('.js-list');
const paginationButtons = document.getElementById('pagination-numbers');
let currentPage = 1;
let param = 'Muscles';

getFiltersExercises(currentPage, param);

async function getFiltersExercises(currentPage, param) {
    try {
        const { results, totalPages } = await fetchFilters(
            currentPage,
            param
        );

        setupPagination({ results, totalPages });
        displayExercises(results);
    } catch (error) {
        console.log(error);
    }
}

function displayExercises(results) {
    listItem.innerHTML = '';
    const markup = results
        .map(({ filter, name, imgURL }) => {
            return `
  <li class="filters__item">
    <img class="filters__img-first" src="${imgURL}"></img>
    <div class="filters__wrapper-first">
    <h2 class="filters__title-first">${filter}</h2>
    <p class="filters__text-first">${name}</p>
    </div>
  </li>
    `;
        })
        .join('');

    listItem.insertAdjacentHTML('beforeend', markup);
}

const filtersList = document.querySelector('.exersices__list');
filtersList.addEventListener('click', (event) => {
    document.querySelectorAll('.btnFilters').forEach(elem => {
        elem.classList.remove('active');
    });

    event.target.classList.add('active');
    param = event.target.textContent.trim();
    listItem.innerHTML = '';
    currentPage = 1;
    getFiltersExercises(currentPage, param);
});


function setupPagination({ results, totalPages }) {
    paginationButtons.innerHTML = '';

    if (totalPages <= 1) return;

    const param = results[0].filter;

    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement('button');
        pageNumber.className = 'pagination-button';
        pageNumber.textContent = i;

        paginationButtons.appendChild(pageNumber);

        pageNumber.addEventListener('click', () => {
            setCurrentPage(param, i);
        });
    }
    handleActivePageNumber();
}

async function setCurrentPage(param, i) {
    currentPage = i;
    await fetchFilters(currentPage, param);
    handleActivePageNumber();
    scrollToTop();
}

const handleActivePageNumber = () => {
    document.querySelectorAll('.pagination-button').forEach((button, page) => {
        button.classList.remove('active-btn');
        if (page + 1 === currentPage) {
            button.classList.add('active-btn');
        }
    });
};

function scrollToTop() {
    window.scrollTo({
        top: 830,
        behavior: 'auto',
    });
}