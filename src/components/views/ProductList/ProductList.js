import React, { useContext } from 'react';
import { useSelector, Provider, ReactReduxContext } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsByCategory, getAll } from '../../../redux/productsRedux';
import styles from './ProductList.module.scss';
import { createStore } from 'redux';

const dummyStore = createStore(() => ({
  products: [],
}));

const ProductListContent = () => {
  const { categoryId = 'furniture' } = useParams() || {};
  const filteredProducts = useSelector(state =>
    categoryId.toLowerCase() === 'furniture'
      ? getAll(state)
      : getProductsByCategory(state, categoryId)
  );

  return (
    <div
      className={`${styles.root} d-flex justify-content-center align-items-center flex-column my-4`}
    >
      <h1>All items from the {categoryId} category</h1>
      {filteredProducts.length > 0 ? (
        <ol>
          {filteredProducts.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ol>
      ) : (
        <p>No products available in this category.</p>
      )}
    </div>
  );
};

const ProductList = () => {
  const context = useContext(ReactReduxContext);
  if (!context) {
    return (
      <Provider store={dummyStore}>
        <ProductListContent />
      </Provider>
    );
  }
  return <ProductListContent />;
};

export default ProductList;
