import { combineReducers, createStore } from 'redux';
import initialState from './initialState';
import compareFullReducer from './compareFullReducer';
import alertReducer from './alertReducer';
import compareReducer from './compareReducer';
import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
import brandsReducer from './brandsRedux';
import feedbackReducer from './feedbackRedux';

const reducers = {
  alert: alertReducer,
  compareFull: compareFullReducer,
  comparedProducts: compareReducer,
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  brands: brandsReducer,
  feedback: feedbackReducer,
};

Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
