import Pagination from 'tui-pagination';

export const setExercisesPagination = (
  containerClass,
  { page, perPage, totalPages },
  onPageChange
) => {
  const pagination = new Pagination(containerClass, {
    page: Number(page),
    itemsPerPage: perPage,
    totalItems: totalPages * perPage,
  });

  pagination.on('beforeMove', function (eventData) {
    onPageChange(eventData.page);
  });
};
