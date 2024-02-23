import { favoritesStorage } from '../storage/favorites';
import { fetchExercise } from '../api/fetch-exercise';
import createExercisesMarkup from './create-exercises-markup';

const favoriteExercises = favoritesStorage.getAll();

const containerFavorites = document.querySelector('.exercises-list-container');
createExercisesMarkup(containerFavorites, { results: favoriteExercises });
