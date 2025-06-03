'use strict';
// this is where I will be saving user data to localStorage
const favorites = readFavorites();
function writeFavorites() {
  const favoritesJSON = JSON.stringify(favorites);
  localStorage.setItem('favorites-storage', favoritesJSON);
}
function readFavorites() {
  const favoritesStorage = localStorage.getItem('favorites-storage');
  if (favoritesStorage) {
    const json = JSON.parse(favoritesStorage);
    return json;
  } else {
    return [];
  }
}
