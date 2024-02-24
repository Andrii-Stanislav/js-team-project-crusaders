import { favoritesStorage } from '../storage/favorites';
import renderExercisesList from './render-exercises-list';

import { refs } from '../refs';

const favoriteExercises = favoritesStorage.getAll();

renderExercisesList(refs.containerFavorites, favoriteExercises);
