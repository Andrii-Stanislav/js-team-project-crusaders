const QUOTE_KEY = 'quote';

export default function getQuote() {
  return JSON.parse(localStorage.getItem(QUOTE_KEY));
}

export const setQuote = (date, quote, author) => {
  localStorage.setItem(QUOTE_KEY, JSON.stringify({ date, quote, author }));
};
