import { fetchQuote } from '../api/fetch-quote.js';
import { getQuote, setQuote } from '../storage/quote.js';

import { refs } from '../refs';

async function updateQuoteDisplay() {
  const today = new Date().toDateString();
  let currentQuote = getQuote();

  if (!currentQuote || currentQuote.date !== today) {
    try {
      const { data } = await fetchQuote();

      if (data) {
        currentQuote = { date: today, quote: data.quote, author: data.author };
        setQuote(today, data.quote, data.author);
      }
    } catch (e) {
      // do nothing
    }
  }

  if (currentQuote) {
    refs.quoteElement.textContent = currentQuote.quote;
    refs.authorElement.textContent = currentQuote.author
      ? `${currentQuote.author}`
      : 'Unknown author';
  }
}

document.addEventListener('DOMContentLoaded', updateQuoteDisplay);
