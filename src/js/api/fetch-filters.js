import { apiInstance } from './config';

export const fetchFilters = ({ page, filter }) =>
  apiInstance.get(`/filters?page=${page}&filter=${filter}`);
