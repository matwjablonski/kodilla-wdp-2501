import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import initialState from './initialState';

import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
import brandsReducer from './brandsRedux';
import feedbackReducer from './feedbackRedux';
import loggedUserReducer from './loggedUserRedux';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState) {
      return JSON.parse(serializedState);
    }
  } catch (err) {
    console.error('Something went wrong...', err);
  }
  return {};
};

const saveStateToLocalStorage = store => next => action => {
  const result = next(action);
  const state = store.getState();
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error('Something went wrong...', err);
  }
  return result;
};

const persistedState = loadState();

const reducers = {
  logged: loggedUserReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  brands: brandsReducer,
  feedback: feedbackReducer,
};

Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] === 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__
  ? compose(
      applyMiddleware(saveStateToLocalStorage),
      window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  : applyMiddleware(saveStateToLocalStorage);

const store = createStore(
  combinedReducers,
  { ...initialState, ...persistedState },
  storeEnhancers
);

export default store;
