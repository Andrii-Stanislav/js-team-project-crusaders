import { getQuote, setQuote } from '../storage/quote';
import { fetchQuote } from '../api/fetch-quote';

document.addEventListener('DOMContentLoaded', function () {
  const quoteElement = document.querySelector('.quote-text');
  const authorElement = document.querySelector('.quote-author');

  const currentQuote = getQuote();

  const today = new Date().toDateString();

  if (currentQuote && currentQuote.date === today) {
    updateDom(currentQuote.quote, currentQuote.author);
    return;
  }

  fetchQuote().then(data => {
    updateDom(data.quote, data.author);
    setQuote(today, data.quote, data.author);
  });

  function updateDom(quote, author) {
    quoteElement.textContent = quote;
    authorElement.textContent = author ? `${author}` : '';
  }
});
