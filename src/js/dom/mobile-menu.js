(() => {
  const openMenuBtn = document.querySelector('[data-menu-open]');
  const closeModalBtn = document.querySelector('[data-menu-close]');
  const mobileMenuRef = document.querySelector('[data-menu-backdrop]');

  openMenuBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', toggleModal);
  mobileMenuRef.addEventListener('click', clickBackdrop);

  function clickBackdrop(event) {
    event.target === event.currentTarget && toggleModal();
  }

  function toggleModal() {
    mobileMenuRef.classList.toggle('is-open-mobile-menu');
  }
})();
