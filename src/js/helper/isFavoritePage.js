export const checkIsFavoritePage = () => {
  const path = window.location.pathname;
  return path.includes('/favorites.html');
};
