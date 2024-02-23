import fetchFilters from './api/fetch-filters';
import displayExercises from './dom/filter_list';

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
    };
};

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
    };
    handleActivePageNumber();
};

async function setCurrentPage(param, i) {
    currentPage = i;
    await fetchFilters(currentPage, param);
    handleActivePageNumber();
    scrollToTop();
};

const handleActivePageNumber = () => {
    document.querySelectorAll('.pagination-button').forEach((button, page) => {
        button.classList.remove('active-btn');
        if (page + 1 === currentPage) {
            button.classList.add('active-btn');
        };
    });
};

function scrollToTop() {
    window.scrollTo({
        top: 830,
        behavior: 'auto',
    });
}