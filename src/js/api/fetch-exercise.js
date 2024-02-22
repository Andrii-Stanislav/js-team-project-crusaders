import { BASE_URL } from './config';

export async function fetchExercise(id) {
  const URL = `${BASE_URL}/exercises/${id}`;

  try {
    const res = await fetch(URL);
    return await res.json();
  } catch {
    console.log('error')
  }
}
