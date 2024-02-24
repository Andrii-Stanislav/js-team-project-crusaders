import { refs } from '../refs';

import { openExercisesList } from '../helper/control-lists-view';
import { filtersService } from '../storage/filters';

import handleGroupClick from '../dom/handle-group-click';

refs.exercisesFiltersList.addEventListener('click', e => {
  let filter = e.target.dataset.filter;
  let group = e.target.dataset.group;
  filter = filter.toLowerCase().split(' ').join('');
  if (filter === 'bodyparts') {
    filter = filter.slice(0, -1);
  }
  group = group.toLowerCase();
  if (filter && group) {
    openExercisesList();
    filtersService.exercisesGroups.set(group);
    handleGroupClick(refs.exercisesContainer, filter, group);
  }
});
