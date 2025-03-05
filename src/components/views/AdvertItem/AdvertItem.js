import React from 'react';
import styles from './AdvertItem.module.scss';
import clsx from 'clsx';

const AdvertItem = () => {
  return (
    <div className={clsx(styles.advertWrapper, 'col-6 py-2')}>
      <img
        className={styles.advertImage}
        src={`${process.env.PUBLIC_URL}/images/products/beds/bed-aenean-ru-bristique-18.jpg`}
        alt='bedroom'
      />
      <div className={styles.advertItem}>
        <h4>
          from <span>$ 30.00</span>
        </h4>
        <h2>Bedroom Bed</h2>
        <a href='#'>Show now</a>
      </div>
    </div>
  );
};

export default AdvertItem;
