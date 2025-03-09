/* TYPES */
const ADD_TO_FAVORITES = 'favorites/ADD_TO_FAVORITES';
const REMOVE_FROM_FAVORITES = 'favorites/REMOVE_FROM_FAVORITES';

/* ACTIONS */
export const addToFavorites = productId => ({
  type: ADD_TO_FAVORITES,
  payload: productId,
});
export const removeFromFavorites = productId => ({
  type: REMOVE_FROM_FAVORITES,
  payload: productId,
});

/* LOCAL STORAGE HANDLING */
const loadFavoritesFromStorage = () => {
  try {
    const serializedFavorites = localStorage.getItem('favorites');
    return serializedFavorites ? JSON.parse(serializedFavorites) : [];
  } catch (err) {
    console.error('Error loading favorites from localStorage', err);
    return [];
  }
};

const saveFavoritesToStorage = favorites => {
  try {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  } catch (err) {
    console.error('Error saving favorites to localStorage', err);
  }
};

/* INITIAL STATE */
const initialState = loadFavoritesFromStorage();

/* REDUCER */
const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES: {
      const updatedFavoritesAdd = [...state, action.payload];
      saveFavoritesToStorage(updatedFavoritesAdd);
      return updatedFavoritesAdd;
    }

    case REMOVE_FROM_FAVORITES: {
      const updatedFavoritesRemove = state.filter(fav => fav.id !== action.payload);
      saveFavoritesToStorage(updatedFavoritesRemove);
      return updatedFavoritesRemove;
    }

    default:
      return state;
  }
};

export default favoritesReducer;
