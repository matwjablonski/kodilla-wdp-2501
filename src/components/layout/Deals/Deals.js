import React from 'react';
import PropTypes from 'prop-types';
import initialState from '../../../redux/initialState';
import styles from './Deals.module.scss';

const Deals = ({ id, category, descryption }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.dealRow}>
          <div
            className={`${styles.bigDeal} ${styles.photo} w-50`}
            style={{ backgroundImage: `url('${initialState.deals[0]?.image}')` }}
          >
            <div className={styles.dealDescryption}>
              <div className={styles.dealDescryptionContainer}>
                <p>
                  Guest Room <span className={styles.bold}>Sofa</span>
                </p>
                <p>-20%</p>
              </div>
            </div>
          </div>

          <div className={`${styles.smallContainer} w-50`}>
            <div
              className={`${styles.smallDealFirst} ${styles.photo} h-50`}
              style={{ backgroundImage: `url('${initialState.deals[1]?.image}')` }}
            >
              <div className={styles.dealDescryption}>
                <p>
                  <span className={styles.bold}>Special</span>
                  <span className={styles.thin}>collection</span>
                  <span className={styles.changeColor}>Save up 45% of furniture</span>
                </p>
              </div>
            </div>
            <div
              className={`${styles.smallDealSecond} ${styles.photo} h-50`}
              style={{ backgroundImage: `url('${initialState.deals[2]?.image}')` }}
            >
              <div className={styles.dealDescryption}>
                <p>
                  <span className={styles.bold}>Office</span>chair
                  <span className={styles.thin}>collection</span>
                  <br></br>
                  <span className={styles.price}>$200.00</span>
                </p>
              </div>
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
  descryption: PropTypes.string,
};

export default Deals;
