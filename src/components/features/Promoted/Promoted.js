import React from 'react';
import styles from './Promoted.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faExchangeAlt,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

const Promoted = () => {
  return (
    <section className={styles.promoted}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className={styles.hotDeals}>
              <h2>
                Hot deals
                <span className={styles.dots}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                </span>
              </h2>
              <div className={styles.product}>
                <img src='/images/product-small.jpg' alt='Hot deal' />
                <div className={styles.productDetails}>
                  <h3>Product Name</h3>
                  <p className={styles.price}>
                    <span className={styles.oldPrice}>$250.00</span>
                    <span className={styles.newPrice}>$180.00</span>
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
            </div>
          </div>
          <div className='col-lg-6'>
            <div className={styles.featured}>
              <img src='/images/product-large.jpg' alt='Featured product' />
              <div className={styles.overlay}>
                <h2>Featured Product</h2>
                <button className={styles.shopNow}>Shop now</button>
              </div>
              <div className={styles.arrows}>
                <button className={styles.arrowLeft}>&lt;</button>
                <button className={styles.arrowRight}>&gt;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promoted;
