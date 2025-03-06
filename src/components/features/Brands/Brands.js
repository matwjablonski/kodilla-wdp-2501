import React, { useState, useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { getAllBrands } from '../../../redux/brandsRedux';
import styles from './Brands.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Brands = () => {
  const brands = useSelector(getAllBrands);
  const [visibleSlides, setVisibleSlides] = useState(6);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 576) {
        setVisibleSlides(1);
      } else if (width >= 576 && width < 768) {
        setVisibleSlides(2);
      } else if (width >= 768 && width < 992) {
        setVisibleSlides(3);
      } else if (width >= 992 && width < 1200) {
        setVisibleSlides(5);
      } else {
        setVisibleSlides(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setAnimationClass(styles.slideOutLeft);
    setTimeout(() => {
      setCurrentIndex(prevIndex => (prevIndex + visibleSlides) % brands.length);
      setAnimationClass(styles.slideInRight);
      setTimeout(() => {
        setAnimationClass('');
      }, 300);
    }, 300);
  };

  const prevSlide = () => {
    setAnimationClass(styles.slideOutRight);
    setTimeout(() => {
      setCurrentIndex(
        prevIndex =>
          (((prevIndex - visibleSlides) % brands.length) + brands.length) %
          brands.length
      );
      setAnimationClass(styles.slideInLeft);
      setTimeout(() => {
        setAnimationClass('');
      }, 300);
    }, 300);
  };

  const slidesToDisplay = [];
  for (let i = 0; i < visibleSlides; i++) {
    slidesToDisplay.push(brands[(currentIndex + i) % brands.length]);
  let repeatedBrands = brands;
  if (brands.length === 5) {
    repeatedBrands = [...brands, brands[0]];
  }

  return (
    <section className={styles.root}>
      <div className={`container ${styles.container}`}>
        <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={styles.brandsWrapper}>
          <div className={`${styles.slider} ${animationClass}`}>
            {slidesToDisplay.map((brand, index) => (
              <div className={styles.brandBox} key={`${brand.id}-${index}`}>
                <img src={brand.image} alt={brand.name} />
              </div>
            ))}
          </div>
        </div>
        <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}>
        <button className={styles.arrow}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className={styles.brandsWrapper}>
          {repeatedBrands.map(brand => (
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
