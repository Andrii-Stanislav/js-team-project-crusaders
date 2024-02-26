import { filtersService } from '../storage/filters';
import initialExerciseList from '../events/initial-exercise-list';
import { FiltersEnum } from '../constants';

export default async function handleSearchSubmit(element) {
  // Prevent page reload
  element.preventDefault();

  let filter = filtersService.exercisesFilters.get().toLowerCase();
  let group = filtersService.exercisesGroups.get().toLowerCase();

  filter = filter.toLowerCase().split(' ').join('');
  if (filter === FiltersEnum.BODY_PARTS) {
    filter = filter.slice(0, -1);
  }
  group = group.toLowerCase();

  // Clear spaces and capital letters from user input
  const keyword =
    element.currentTarget.elements.search.value.trim().toLowerCase() ?? '';

  filtersService.exercisesTable.setKeyword(keyword);
  filtersService.exercisesTable.setPage(1);

  initialExerciseList();
}
