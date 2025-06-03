// this is where I will be saving user data to localStorage

interface Favorites {
  date: string;
  name: string;
  city: string;
  venue: string;
  startTime: string;
  id: string;
}

const favorites: Favorites[] = readFavorites();

function writeFavorites(): void {
  const favoritesJSON = JSON.stringify(favorites);
  localStorage.setItem('favorites-storage', favoritesJSON);
}

function readFavorites(): Favorites[] {
  const favoritesStorage = localStorage.getItem('favorites-storage');
  if (favoritesStorage) {
    const json = JSON.parse(favoritesStorage);
    return json;
  } else {
    return [];
  }
}
