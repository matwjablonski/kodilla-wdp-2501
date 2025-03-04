import React, { useState, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllBrands } from '../../../redux/brandsRedux';
import styles from './Brands.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Brands = () => {
  const brands = useSelector(getAllBrands);
  const visibleSlides = 6;
  const initialBrands = brands.length
    ? [...brands, ...brands.slice(0, visibleSlides)]
    : [];

  const [repeatedBrands, setRepeatedBrands] = useState(initialBrands);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animate, setAnimate] = useState(false);

  const shift = 6;

  const right = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setAnimate(true);

    setTimeout(() => {
      setRepeatedBrands(prev => [...prev.slice(shift), ...prev.slice(0, shift)]);
      setAnimate(false);
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning]);

  const left = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setAnimate(true);

    setTimeout(() => {
      setRepeatedBrands(prev => [...prev.slice(-shift), ...prev.slice(0, -shift)]);
      setAnimate(false);
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning]);

  return (
    <section className={styles.root}>
      <div className={`container ${styles.container}`}>
        <button className={`${styles.arrow} ${styles.left}`} onClick={left}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={styles.brandsWrapper}>
          <div className={`${styles.slider} ${animate ? styles.transition : ''}`}>
            {repeatedBrands.slice(0, visibleSlides).map((brand, index) => (
              <div className={styles.brandBox} key={`${brand.id}-${index}`}>
                <img src={brand.image} alt={brand.name} />
              </div>
            ))}
          </div>
        </div>
        <button className={`${styles.arrow} ${styles.right}`} onClick={right}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
};

export default Brands;
