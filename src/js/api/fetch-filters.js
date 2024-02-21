import { BASE_URL } from './config';

export async function fetchFilters({ page, filter }) {
  const URL = `${BASE_URL}/filters?page=${page}&filter=${filter}`;

  try {
    const res = await fetch(URL);

    return await res.json();
  } catch {
    // TODO - add error event
  }
}
