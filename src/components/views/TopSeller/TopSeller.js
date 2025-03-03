import React from 'react';
import styles from './TopSeller.module.scss';
import Button from '../../common/Button/Button';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

const TopSeller = () => {
  return (
    <div>
      <div
        className={styles.photo}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/products/beds/bed-aenean-ru-bristique-2.jpg)`,
        }}
      >
        <div className={styles.outlines}>
          <div>
            <Button variant='outline'>
              <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
            </Button>
          </div>
          <div>
            <Button variant='outline' data-testid='compare-test'>
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
            </Button>
          </div>
          <div>
            <Button variant='outline'>
              <FontAwesomeIcon icon={faShoppingBasket}>Add to cart</FontAwesomeIcon>
            </Button>
          </div>
          <div>
            <Button variant='outline' className={styles.topBtn}>
              <FontAwesomeIcon icon={faEye}>View</FontAwesomeIcon>
            </Button>
          </div>
        </div>
        <div className={styles.sale}>
          <div className={styles.price}>$30.00</div>
          <div className={styles.oldPrice}>$60.00</div>
        </div>
        <div className={styles.product}>
          <div>Name</div>
        </div>
      </div>
      <div className='carousel'></div>
    </div>
  );
};

export default TopSeller;
