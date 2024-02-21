import { BASE_URL } from './config';

export async function fetchQuote() {
  console.log('Attempting to fetch quote...');
  try {
    const response = await fetch(`${BASE_URL}/quote`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Data received:', data);

    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
