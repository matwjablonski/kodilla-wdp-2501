import React from 'react';
import { useSelector } from 'react-redux';
import { getAllBrands } from '../../../redux/brandsRedux';
import styles from './Brands.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Brands = () => {
  const brands = useSelector(getAllBrands);

  return (
    <section className={styles.root}>
      <div className={`container ${styles.container}`}>
        <button className={styles.arrow}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={styles.brandsWrapper}>
          {brands.map(brand => (
            <div className={styles.brandBox} key={brand.id}>
              <img src={brand.image} alt={brand.name} />
            </div>
          ))}
        </div>
        <button className={styles.arrow}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
};

export default Brands;
