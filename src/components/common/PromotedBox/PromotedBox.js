import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faExchangeAlt,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import styles from './PromotedBox.module.scss';
import { hotDeals } from '../../../redux/productsRedux';

const PromotedBox = () => {
  // Pobieramy dane z magazynu
  const hotDeal = useSelector(hotDeals);

  return (
    <div className={styles.hotDeals}>
      <h2>
        Hot deals
        <span className={styles.dots}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </span>
      </h2>
      {hotDeal ? (
        <div className={styles.photo}>
          <img src={hotDeal.image} alt={hotDeal.name} />
          <div className={styles.productDetails}>
            <h3>{hotDeal.name}</h3>
            <p className={styles.price}>
              {hotDeal.oldPrice && (
                <span className={styles.oldPrice}>${hotDeal.oldPrice}</span>
              )}
              <span className={styles.newPrice}>${hotDeal.price}</span>
            </p>
            <div className={styles.actions}>
              <button>
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>
              <button>
                <FontAwesomeIcon icon={faExchangeAlt} />
              </button>
              <button>
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>No hot deals available.</p>
      )}
    </div>
  );
};

export default PromotedBox;
