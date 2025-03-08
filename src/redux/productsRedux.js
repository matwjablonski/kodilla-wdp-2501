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

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
