const BASE_URL = 'https://your-energy.b.goit.study/api/exercises';

// Function sends get request by using filters saved in local storage and keywords from user input
export default async function getExercises(filter, keyword, page = 1) {
  // Create dynamic parameters for get request based on active filter
  let params = new URLSearchParams({
    //Active filter parametr
    [Object.keys(filter)]: filter[Object.keys(filter)],
    // Search input data
    keyword: keyword,
    page: page,
    limit: 10,
  });

  try {
    const response = await fetch(`${BASE_URL}?${params}`);
    const data = await response.json();

    // Stop function if nothing is find
    if (!data.results.length) {
      return;
    }
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
