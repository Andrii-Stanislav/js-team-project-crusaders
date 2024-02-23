import { apiInstance } from './config';

export const fetchQuote = () => apiInstance.get('/quote');
