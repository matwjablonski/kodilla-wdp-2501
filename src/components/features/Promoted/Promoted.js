import React from 'react';
import { useSelector } from 'react-redux';
import { hotDealsProducts, featuredProducts } from '../../../redux/productsRedux';
import PromotedBox from '../../common/PromotedBox/PromotedBox';
import styles from './Promoted.module.scss';

const Promoted = () => {
  const featuredProductsArray = useSelector(featuredProducts);
  const hotDealsArray = useSelector(hotDealsProducts);

  const featuredProduct =
    featuredProductsArray.length > 0 ? featuredProductsArray[0] : null;
  const firstHotDeal = hotDealsArray.length > 0 ? hotDealsArray[0] : null;

  return (
    <section className={styles.promoted}>
      <div className='container'>
        {/*
          .row z klasą .d-flex .align-items-stretch
          pozwala nam wyrównać wysokość obu kolumn
        */}
        <div className='row d-flex align-items-stretch'>
          {/* Lewa kolumna */}
          <div className='col-md-4 d-flex flex-column'>
            {firstHotDeal ? (
              <PromotedBox hotDeal={firstHotDeal} />
            ) : (
              <p>No hot deals available.</p>
            )}
          </div>

          {/* Prawa kolumna */}
          <div className='col-md-8 d-flex flex-column'>
            {featuredProduct ? (
              <div
                className={styles.featuredWrapper}
                style={{ backgroundImage: `url(${featuredProduct.image})` }}
              >
                {/* Pasek overlay (na środku wysokości) */}
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
      </div>
    </section>
  );
};

export default Promoted;
