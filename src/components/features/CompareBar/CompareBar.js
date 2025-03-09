import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './CompareBar.module.scss';
import CompareBarItem from '../CompareBarItem/CompareBarItem';
import Button from '../../common/Button/Button';

const CompareBar = ({ productsSelected }) => {
  return (
    <div
      className={clsx(
        styles.compareBar,
        'row d-flex flex-md-column flex-lg-row justify-content-center align-items-center pl-3 py-4'
      )}
    >
      <div className='col-12 col-md-10 d-flex flex-row mx-auto'>
        {productsSelected.map(product => (
          <CompareBarItem key={product.id} {...product} />
        ))}
      </div>
      <div className='col-2 py-2'>
        <Button className={styles.compareBtn}>Compare</Button>
      </div>
    </div>
  );
};

CompareBar.propTypes = {
  productsSelected: PropTypes.array,
};

export default CompareBar;
