import { favoritesStorage } from '../storage/favorites';
import { fetchExercise } from '../api/fetch-exercise';
import createExercisesMarkup from './create-exercises-markup';
import { refs } from '../refs';

const favoriteExercises = favoritesStorage.getAll();

createExercisesMarkup(refs.containerFavorites, { results: favoriteExercises });
