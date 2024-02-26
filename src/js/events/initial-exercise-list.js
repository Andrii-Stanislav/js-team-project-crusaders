import { filtersService } from '../storage/filters';

import { refs } from '../refs';

import { getExercisesByKeyword } from '../api/get-exercises-by-keyword';
import renderExercisesList from '../dom/render-exercises-list';
import addText from '../helper/add-text';
import { addPagination } from '../helper/add-pagination.js';
import { FiltersEnum } from '../constants';

export default async function initialExercisesList() {
  let filter = filtersService.exercisesFilters.get();
  let group = filtersService.exercisesGroups.get();

  filter = filter.toLowerCase().split(' ').join('');
  if (filter === FiltersEnum.BODY_PARTS) {
    filter = filter.slice(0, -1);
  }
  group = group.toLowerCase();

  const currentPage = filtersService.exercisesTable.getPage();
  const currentKeyword = filtersService.exercisesTable.getKeyword();

  const responseData = await getExercisesByKeyword({
    filter,
    group,
    page: currentPage,
    keyword: currentKeyword,
  });

  addText(refs.breadcrumbsText, group, refs.breadcrumbsDivider);
  // Render exercises list

  const { results, page, perPage, totalPages } = responseData.data;
  renderExercisesList(refs.exercisesContainer, results);

  addPagination(
    'main-exercises-pagination',
    {
      page: Number(page),
      perPage,
      totalPages,
    },
    newPage => {
      filtersService.exercisesTable.setPage(newPage);
      initialExercisesList();
    }
  );
}

initialExercisesList();
