import { apiInstance } from './config';

export const fetchExercise = id => apiInstance.get(`/exercises/${id}`);
