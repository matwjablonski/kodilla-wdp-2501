import React from 'react';
import styles from './CompanyClaimHorizontal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const CompanyClaimHorizontal = () => {
  return (
    <div className={styles.root}>
      <div className='row align-items-center'>
        <div className='col text-center'>
          <a href='#'>
            <img src='/images/logo.png' alt='Bazar' />
          </a>
        </div>
        <div className={`col text-right ${styles.cart}`}>
          <a href='#' className={styles.cartBox}>
            <div className={styles.cartIcon}>
              <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
            </div>
            <div className={styles.cartCounter}>0</div>
          </a>
        </div>
        <div className='w-100'></div>
        <div className='col'></div>
        <div className={`col text-right ${styles.phoneNumber}`}>
          <p>
            <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560 -
            222
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyClaimHorizontal;
