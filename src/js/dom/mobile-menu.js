import { refs } from '../refs';

(() => {
  refs.openMobileMenuBtn.addEventListener('click', toggleModal);
  refs.closeMobileModalBtn.addEventListener('click', toggleModal);
  refs.mobileMenuRef.addEventListener('click', clickBackdrop);

  function clickBackdrop(event) {
    event.target === event.currentTarget && toggleModal();
  }

  function toggleModal() {
    refs.mobileMenuRef.classList.toggle('is-open-mobile-menu');
  }
})();
