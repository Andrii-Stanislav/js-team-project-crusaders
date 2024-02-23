import { favoritesStorage } from '../storage/favorites';
import { fetchExercise } from '../api/fetch-exercise';
import createExercisesMarkup from './create-exercises-markup';

const favoriteExercises = favoritesStorage.getAll();

createExercisesMarkup(containerFavorites, { results: favoriteExercises });
