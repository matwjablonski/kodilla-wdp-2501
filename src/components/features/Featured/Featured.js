import React from 'react';
import { useSelector } from 'react-redux';
import { hotDealsProducts, featuredProducts } from '../../../redux/productsRedux';
import PromotedBox from '../../common/PromotedBox/PromotedBox';
import styles from './Featured.module.scss';

const Featured = () => {
  const featuredProductsArray = useSelector(featuredProducts);
  const hotDealsArray = useSelector(hotDealsProducts);
  const featuredProduct =
    featuredProductsArray.length > 0 ? featuredProductsArray[0] : null;
  const firstHotDeal = hotDealsArray.length > 0 ? hotDealsArray[0] : null;

  return (
    <section className={styles.promoted}>
      <div className='container'>
        <div className='row d-flex align-items-stretch'>
          <div className='col-md-4 d-flex flex-column'>
            {firstHotDeal ? (
              <PromotedBox hotDeal={firstHotDeal} />
            ) : (
              <p>No hot deals available.</p>
            )}
          </div>
          <div className='col-md-8 d-flex flex-column'>
            {featuredProduct ? (
              <div
                className={styles.featuredWrapper}
                style={{ backgroundImage: `url(${featuredProduct.image})` }}
              >
                <div className={styles.overlay}>
                  <h2>
                    Indoor <span>furniture</span>
                  </h2>
                  <p>Save up to 50% of all furniture</p>
                  <button className={styles.shopNow}>Shop now</button>
                </div>
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

export default Featured;
