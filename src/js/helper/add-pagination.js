import Pagination from 'tui-pagination';

export const addPagination = (
  containerClass,
  { page, perPage, totalPages },
  onPageChange
) => {
  const paginationContainer = document.getElementById(containerClass);

  paginationContainer.style.display = totalPages > 1 ? 'flex' : 'none';

  const pagination = new Pagination(containerClass, {
    page: Number(page),
    itemsPerPage: perPage,
    totalItems: totalPages * perPage,
    centerAlign: true,
    firstItemClassName: 'pagination-item',
    lastItemClassName: 'pagination-item',
    template: {
      page: '<a href="#" class="pagination-page">{{page}}</a>',
      currentPage: '<div class="pagination-current-page-container">' +
        '<a href="#" class="pagination-page pagination-current-page">{{page}}</a>' +
        '</div>',
      moveButton: '<a href="#" class="visually-hidden"></a>',
      disabledMoveButton: '<a href="#" class="visually-hidden"></a>',
      moreButton: '<a href="#" class="visually-hidden"></a>',
    }
  });

  pagination.on('beforeMove', function (eventData) {
    onPageChange(eventData.page);
  });
};
