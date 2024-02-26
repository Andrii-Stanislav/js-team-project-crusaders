import { refs } from '../refs';

import { openExercisesList } from '../helper/control-lists-view';
import { filtersService } from '../storage/filters';
import initialExerciseList from './initial-exercise-list';
import { FiltersEnum } from '../constants';
import handleGroupClick from '../dom/handle-group-click';

refs.exercisesFiltersList.addEventListener('click', e => {
  let filter = e.target.dataset.filter;
  let group = e.target.dataset.group;
  filter = filter.toLowerCase().split(' ').join('');
  if (filter === FiltersEnum.BODY_PARTS) {
    filter = filter.slice(0, -1);
  }
  group = group.toLowerCase();
  if (filter && group) {
    openExercisesList();
    filtersService.exercisesGroups.set(group);
    handleGroupClick(refs.exercisesContainer, filter, group);
    initialExerciseList();
  }
});
