/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const hotDealsProducts = ({ products }) =>
  products.filter(
    item =>
      item.hotDeals &&
      item.hotDealsEndTime &&
      new Date(item.hotDealsEndTime) > new Date()
  );

export const featuredProducts = ({ products }) =>
  products.filter(item => item.featured === true);

export const getBySale = ({ products }) =>
  products.filter(product => product.promo === 'sale');

export const getByRated = ({ products }) =>
  products.filter(product => product.stars > 2);

// actions
const createActionName = actionName => `app/products/${actionName}`;
const SET_COMPARE_STATUS = createActionName('SET_COMPARE_STATUS');

// action creators
export const setCompareStatus = payload => ({ type: SET_COMPARE_STATUS, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_COMPARE_STATUS:
      return statePart.map(product =>
        product.id === action.payload.id ? { ...product, ...action.payload } : product
      );
    default:
      return statePart;
  }
}
