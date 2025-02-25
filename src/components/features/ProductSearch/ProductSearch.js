import React from 'react';
import PropTypes from 'prop-types';
import { getAll } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => {
  const categories = useSelector(getAll);

  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        <ul>
          <li>
            <span className={styles.categorySelect}>Select a category</span>
            <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
            <ul>
              {categories.map(category => (
                <li key={category.id}>{category.name}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.searchField}>
        <input placeholder='Search products...' type='text' />
        <button>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
