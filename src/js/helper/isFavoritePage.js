export const checkIsFavoritePage = () => {
  const path = window.location.pathname;
  return path === '/favorites.html';
};
