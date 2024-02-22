const QUOTE_KEY = 'quote';

export function getQuote() {
  const quote = localStorage.getItem(QUOTE_KEY);
  return quote ? JSON.parse(quote) : null;
}

export function setQuote(date, quote, author) {
  const quoteData = JSON.stringify({ date, quote, author });
  localStorage.setItem(QUOTE_KEY, quoteData);
}
