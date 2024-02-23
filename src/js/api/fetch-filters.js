import { apiInstance } from './config';

export const getFilter = ({ page, filter }) =>
  apiInstance.get(`/filters?page=${page}&filter=${filter}`);
