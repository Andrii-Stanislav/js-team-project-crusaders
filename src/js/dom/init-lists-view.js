import { filtersService } from '../storage/filters';

import {
  openExercisesList,
  closeExercisesList,
} from '../helper/control-lists-view';

const isOpenExercisesList = filtersService.checkIsOpenExercisesList();

if (isOpenExercisesList) {
  openExercisesList();
} else {
  closeExercisesList();
}
