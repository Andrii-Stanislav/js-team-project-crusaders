import { refs } from '../refs';

window.onload = function () {
  scrollFunction();
  window.onscroll = scrollFunction;
};

function scrollFunction() {
  const returnToTop = refs.returnToTop;
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    returnToTop.style.display = 'block';
  } else {
    returnToTop.style.display = 'none';
  }
}

refs.returnToTop.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
