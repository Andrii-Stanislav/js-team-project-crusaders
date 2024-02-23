import { apiInstance } from './config';

export const fetchFilters = (filter, page) =>
  apiInstance.get(`/filters?page=${page}&filter=${filter}`);
