import { fetchQuote } from '../api/fetch-quote.js';
import { getQuote, setQuote } from '../storage/quote.js';

import { refs } from '../refs';

document.addEventListener('DOMContentLoaded', function () {
  //Dinamic adoption of height of background Image in Tablet mode

  // TODO - discuss with developer
  function adjustHeightForTablet() {
    const tabletMediaQuery = window.matchMedia(
      '(min-width: 768px) and (max-width: 1440px)'
    );

    const adaptiveBackground = document.querySelector('.adaptive-background');
    if (tabletMediaQuery.matches) {
      const height = refs.quoteCard.offsetHeight;
      adaptiveBackground.style.height = `${height}px`;
    } else {
      adaptiveBackground.style.height = '242px';
    }
  }
  window.addEventListener('load', adjustHeightForTablet);
  window.addEventListener('resize', adjustHeightForTablet);

  //////////////////////////////

  async function updateQuoteDisplay() {
    const today = new Date().toDateString();
    let currentQuote = getQuote();

    if (!currentQuote || currentQuote.date !== today) {
      const data = await fetchQuote();
      if (data) {
        currentQuote = { date: today, quote: data.quote, author: data.author };
        setQuote(today, data.quote, data.author);
      }
    }

    if (currentQuote) {
      refs.quoteElement.textContent = currentQuote.quote;
      refs.authorElement.textContent = currentQuote.author
        ? `${currentQuote.author}`
        : 'Unknown author';
    }
  }

  updateQuoteDisplay();
});
