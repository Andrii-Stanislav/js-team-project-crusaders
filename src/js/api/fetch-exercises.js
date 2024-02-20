import { BASE_URL } from './config';

export async function fetchExercises({page}) {
  // TODO - describe all query params
  const URL = `${BASE_URL}/exercises?page=${page}`;

  try {
    const res = await fetch(URL);

    return await res.json();
  } catch {
    // TODO - add error event
  }
}
