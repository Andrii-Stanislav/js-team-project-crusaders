import { BASE_URL } from './config';
import axios from 'axios';

export function updateExerciseRating(id, rate, email, review) {
  const URL = `${BASE_URL}/exercises/${id}/rating`;

  return axios.patch(URL, { rate, email, review });
}
