import React from 'react';
import PropTypes from 'prop-types';

import styles from './Deals.module.scss';
// import DealBox from '../../common/DealBox/DealBox';

const Deals = ( id, category,) => {

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.dealRow}>
          <div
            className={`${styles.bigDeal} ${styles.photo} w-50`}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/products/beds/${category}-${id}.jpg)`,
            }}
          />
          <div className={`${styles.smallContainer} w-50`}>
            <div className={`${styles.smallDealFirst} ${styles.photo} h-50`}>
              {/* <DealBox {...deals[1]} /> */}
            </div>
            <div className={`${styles.smallDealSecond} ${styles.photo} h-50`}>
              {/* <DealBox {...deals[2]} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Deals.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
};

export default Deals;
