const FAVORITES_KEY = 'favorite-exercises';

const addToFavorites = exerciseObject => {
  const favorites = localStorage.getItem(FAVORITES_KEY);

  if (favorites) {
    const parsedFavorites = JSON.parse(favorites);
    const newFavorites = [
      ...parsedFavorites.filter(f => f.id !== exerciseObject.id),
      exerciseObject,
    ];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
  } else {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([exerciseObject]));
  }
};

const removeFromFavorites = id => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  if (favorites) {
    const parsedFavorites = JSON.parse(favorites);
    const filteredFavorites = parsedFavorites.filter(f => f.id !== id);
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

const isFavorite = id => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  if (favorites) {
    const parsedFavorites = JSON.parse(favorites);
    return parsedFavorites.some(f => f.id === id);
  }
  return false;
};

export const favoritesStorage = {
  add: addToFavorites,
  remove: removeFromFavorites,
  getAll: getAllFavorites,
  isFavorite,
};
