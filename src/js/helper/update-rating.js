export function updateRatingStar(value) {
  const stars = document.querySelectorAll(
    '#rating .modal-exercises__rating-star'
  );

  stars.forEach(star => {
    const starValue = parseInt(star.dataset.value, 10);

    let percentFilled = 0;

    if (starValue <= value) {
      percentFilled = 100;
    } else if (starValue - 1 < value) {
      percentFilled = (value - starValue + 1) * 100;
    }
    star.style.setProperty('--percent-filled', `${percentFilled}%`);
  });
}
