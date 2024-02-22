const FAVORITES_KEY = 'favorite-exercises';

const addToFavorites = exerciseObject => {
  const favorites = localStorage.getItem(FAVORITES_KEY);

  if (favorites) {
    const parsedFavorites = JSON.parse(favorites);
    const newFavorites = [
      ...parsedFavorites.filter(f => f._id !== exerciseObject._id),
      exerciseObject,
    ];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
  } else {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([exerciseObject]));
  }
};

const removeFromFavorites = removeId => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  if (favorites) {
    const parsedFavorites = JSON.parse(favorites);
    const filteredFavorites = parsedFavorites.filter(f => f._id !== removeId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(filteredFavorites));
  }
};

const getAllFavorites = () => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  if (favorites) {
    return JSON.parse(favorites);
  }
  return [];
};

const isFavorite = checkId => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  if (favorites) {
    const parsedFavorites = JSON.parse(favorites);
    return parsedFavorites.some(f => f._id === checkId);
  }
  return false;
};

export const favoritesStorage = {
  add: addToFavorites,
  remove: removeFromFavorites,
  getAll: getAllFavorites,
  isFavorite,
};
