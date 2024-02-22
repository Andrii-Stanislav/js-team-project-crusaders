import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.js-footer-newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('mailing-email').value;

  fetch('https://your-energy.b.goit.study/api/subscription', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: email })
  })
    .then(response => {
      if (response.status === 201) {
        return response.json();
      } else if (response.status === 409) {
        return response.json().then(data => {
          throw new Error(data.message);
        });
      } else {
        throw new Error('An unexpected error occurred');
      }
    })
    .then(data => {
      iziToast.success({
        title: 'Success',
        message: data.message,
      });
    })
    .catch(error => {
      if (error.message === "Subscription already exists") {
        iziToast.info({
          title: 'Info',
          message: error.message,
        });
      } else {
        iziToast.error({
          title: 'Error',
          message: error.message,
        });
      }
    });
});
