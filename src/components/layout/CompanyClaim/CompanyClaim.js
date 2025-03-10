import React, { useEffect, useState } from 'react';
import styles from './CompanyClaim.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import CompanyClaimHorizontal from '../CompanyClaimHorizontal/CompanyClaimHorizontal';

const CompanyClaim = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className={styles.root}>
      <div className={`container ${isMobile ? 'd-none' : ''}`}>
        <div className='row align-items-center'>
          <div className={`col-4 text-left ${styles.phoneNumber}`}>
            <p>
              <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> 2300 - 3560
              - 222
            </p>
          </div>
          <div className='col-4 text-center'>
            <a href='#' className={styles.bazarImg}>
              <img src='/images/logo.png' alt='Bazar' />
            </a>
          </div>
          <div className={`col-4 text-right ${styles.cart}`}>
            <a href='#' className={styles.cartBox}>
              <div className={styles.cartIcon}>
                <FontAwesomeIcon className={styles.icon} icon={faShoppingBasket} />
              </div>
              <div className={styles.cartCounter}>0</div>
            </a>
          </div>
        </div>
      </div>
      <div className={`container ${!isMobile ? 'd-none' : ''}`}>
        <CompanyClaimHorizontal />
      </div>
    </div>
  );
};

export default CompanyClaim;
