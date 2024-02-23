import { apiInstance } from './config';

// Function sends get request by using filters saved in local storage and keywords from user input
export const getExercisesByKeyword = (filter, keyword = '', page = 1) => {
  // Create dynamic parameters for get request based on active filter
  let params = new URLSearchParams({
    //Active filter parametr
    [Object.keys(filter)]: filter[Object.keys(filter)],
    // Search input data
    keyword: keyword,
    page: page,
    limit: 10,
  });

  return apiInstance.get(`/exercises?${params}`);
};
