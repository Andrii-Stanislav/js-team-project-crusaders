import { apiInstance } from './config';

export const updateExerciseRating = (id, rate, email, review) =>
  apiInstance.patch(`/exercises/${id}/rating`, {
    rate,
    email,
    review,
  });
