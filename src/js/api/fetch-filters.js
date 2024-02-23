import { BASE_URL } from './config';

export async function fetchFilters({ page, param }) {
  const URL = `${BASE_URL}/filters?page=${page}&filter=${param}&limit=12`;

  try {
    const res = await fetch(URL);

    return await res.json();
  } catch {
    // TODO - add error event
  }
}
