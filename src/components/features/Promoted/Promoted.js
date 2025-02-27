import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Promoted.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faExchangeAlt,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { hotDeals, featured } from '../../../redux/productsRedux';
import PromotedBox from '../../common/PromotedBox/PromotedBox';

const Promoted = () => {
  const hotDealsProducts = useSelector(hotDeals);
  const featuredProducts = useSelector(featured);

  const hotDeal = hotDealsProducts.length > 0 ? hotDealsProducts[0] : null;
  const featuredProduct = featuredProducts.length > 0 ? featuredProducts[0] : null;

  return (
    <section className={styles.promoted}>
      <div className='container'>
        <div className='row'>
          {/* Hot Deals */}
          <div className='col-md-4'>
            <PromotedBox />
          </div>
          {/* Featured Product */}
          <div className='col-md-8'>
            <div className={styles.featured}>
              {featuredProduct ? (
                <>
                  <img src={featuredProduct.image} alt={featuredProduct.name} />
                  <div className={styles.overlay}>
                    <h2>{featuredProduct.name}</h2>
                    <button className={styles.shopNow}>Shop now</button>
                  </div>
                </>
              ) : (
                <p>No featured product available.</p>
              )}
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
