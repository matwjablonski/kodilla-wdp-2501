/* selectors */
export const getComparedProducts = ({ comparedProducts }) => comparedProducts;
export const getComparedProductById = ({ comparedProducts, productId }) =>
  comparedProducts.find(product => product.id === productId);

// actions
const createActionName = actionName => `app/compare/${actionName}`;
const ADD_TO_COMPARE = createActionName('ADD_TO_COMPARE');
const REMOVE_FROM_COMPARE = createActionName('REMOVE_FROM_COMPARE');

//action creators
export const addToCompare = payload => ({ type: ADD_TO_COMPARE, payload });
export const removeFromCompare = payload => ({ type: REMOVE_FROM_COMPARE, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_COMPARE:
      return [...statePart, { ...action.payload }];
    case REMOVE_FROM_COMPARE:
      return statePart.filter(product => product.id !== action.payload);
    default:
      return statePart;
  }
}
