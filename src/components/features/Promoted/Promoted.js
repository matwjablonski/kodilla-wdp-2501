import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Promoted.module.scss';
import { hotDealsProducts, featuredProducts } from '../../../redux/productsRedux';
import PromotedBox from '../../common/PromotedBox/PromotedBox';

const Promoted = () => {
  const featuredProductsArray = useSelector(featuredProducts);
  const hotDealsArray = useSelector(hotDealsProducts);

  const featuredProduct =
    featuredProductsArray.length > 0 ? featuredProductsArray[0] : null;
  const firstHotDeal = hotDealsArray.length > 0 ? hotDealsArray[0] : null;

  return (
    <section className={styles.promoted}>
      <div className={styles.row}>
        {/* Lewa strona (Hot deal) */}
        <div className={styles.colLeft}>
          {firstHotDeal ? (
            <PromotedBox hotDeal={firstHotDeal} />
          ) : (
            <p>No hot deals available.</p>
          )}
        </div>

        {/* Prawa strona (Featured product) */}
        <div className={styles.colRight}>
          {featuredProduct ? (
            <div
              className={styles.featuredWrapper}
              style={{ backgroundImage: `url(${featuredProduct.image})` }}
            >
              {/* Pasek overlay na środku wysokości */}
              <div className={styles.overlay}>
                <h2>
                  INDOOR <span>FURNITURE</span>
                </h2>
                <p>SAVE UP TO 50% OF ALL FURNITURE</p>
                <button className={styles.shopNow}>SHOP NOW</button>
              </div>

              {/* Strzałki na dole */}
              <div className={styles.arrows}>
                <button className={styles.arrowLeft}>&lt;</button>
                <button className={`${styles.arrowRight} ${styles.active}`}>
                  &gt;
                </button>
              </div>
            </div>
          ) : (
            <p>No featured product available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Promoted;
