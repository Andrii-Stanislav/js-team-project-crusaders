// document.addEventListener('DOMContentLoaded', function () {
//   const quoteElement = document.querySelector('.quote-text');
//   const authorElement = document.querySelector('.quote-author');
//   const apiUrl = 'https://your-energy.b.goit.study/api/quote';

//   localStorage.clear();

//   async function getQuote() {
//     console.log('Attempting to fetch quote...');
//     try {
//       const response = await fetch(apiUrl);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log('Data received:', data);

//       //  Checking if quote and author avalible
//       if (data.quote && data.author) {
//         updateDisplayAndStorage(data.quote, data.author);
//       } else {
//         console.log('Missing quote or author in the response');
//         updateDisplayAndStorage('No quote available.', 'Unknown author');
//       }
//     } catch (error) {
//       console.error('Fetch error:', error);
//       updateDisplayAndStorage('Failed to fetch the quote.', '');
//     }
//   }

//   function updateDisplayAndStorage(quote, author) {
//     quoteElement.textContent = quote;
//     authorElement.textContent = author ? `${author}` : '';
//     // Saving in localStorage
//     const today = new Date().toISOString().split('T')[0];
//     localStorage.setItem('lastFetchDate', today);
//     localStorage.setItem('quoteOfTheDay', quote);
//     localStorage.setItem('authorOfTheDay', author);
//   }

//   // checking either update quote or not
//   const lastFetchDate = localStorage.getItem('lastFetchDate');
//   const today = new Date().toISOString().split('T')[0];
//   if (lastFetchDate === today) {
//     console.log('Using cached quote...');
//     quoteElement.textContent =
//       localStorage.getItem('quoteOfTheDay') || 'No quote available.';
//     authorElement.textContent = localStorage.getItem('authorOfTheDay')
//       ? `${localStorage.getItem('authorOfTheDay')}`
//       : 'Unknown author';
//   } else {
//     getQuote();
//   }
// });
