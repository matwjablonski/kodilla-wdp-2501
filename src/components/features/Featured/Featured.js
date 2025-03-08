import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { hotDealsProducts, featuredProducts } from '../../../redux/productsRedux';
import PromotedBox from '../../common/PromotedBox/PromotedBox';
import styles from './Featured.module.scss';

const Featured = () => {
  const hotDealsArray = useSelector(hotDealsProducts);
  const lastThreeHotDeals = hotDealsArray.slice(-3);
  const [activeHotDealIndex, setActiveHotDealIndex] = useState(0);
  const activeHotDeal =
    lastThreeHotDeals.length > 0 ? lastThreeHotDeals[activeHotDealIndex] : null;

  const [paused, setPaused] = useState(false);
  const pauseTimeoutRef = useRef(null);
  const intervalRef = useRef(null);

  const pauseAutoplay = () => {
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    setPaused(true);
    pauseTimeoutRef.current = setTimeout(() => {
      setPaused(false);
    }, 10000);
  };

  const handleDotClick = index => {
    setActiveHotDealIndex(index);
    pauseAutoplay();
  };

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setActiveHotDealIndex(prev =>
          prev < lastThreeHotDeals.length - 1 ? prev + 1 : 0
        );
      }, 3000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [paused, lastThreeHotDeals.length]);

  const featuredProductsArray = useSelector(featuredProducts);
  const [activeFeaturedIndex, setActiveFeaturedIndex] = useState(0);
  const activeFeaturedProduct =
    featuredProductsArray.length > 0
      ? featuredProductsArray[activeFeaturedIndex]
      : null;

  const [activeArrow, setActiveArrow] = useState(null);
  const [fade, setFade] = useState(true);

  const handleFeaturedArrowLeftClick = () => {
    setActiveArrow('left');
    setFade(false);
    setTimeout(() => {
      setActiveFeaturedIndex(prev =>
        prev > 0 ? prev - 1 : featuredProductsArray.length - 1
      );
      setFade(true);
    }, 300);
  };

  const handleFeaturedArrowRightClick = () => {
    setActiveArrow('right');
    setFade(false);
    setTimeout(() => {
      setActiveFeaturedIndex(prev =>
        prev < featuredProductsArray.length - 1 ? prev + 1 : 0
      );
      setFade(true);
    }, 300);
  };

  return (
    <section className={styles.promoted}>
      <div className='container'>
        <div className='row d-flex align-items-stretch'>
          <div className='col-lg-4 d-none d-lg-flex flex-column'>
            {activeHotDeal ? (
              <PromotedBox
                hotDeal={activeHotDeal}
                dotsCount={lastThreeHotDeals.length}
                activeDot={activeHotDealIndex}
                onDotClick={handleDotClick}
              />
            ) : (
              <p>No hot deals available.</p>
            )}
          </div>
          <div className='col-lg-8 d-flex flex-column'>
            {activeFeaturedProduct ? (
              <div className={styles.featuredWrapper}>
                <div
                  className={`${styles.featuredContent} ${
                    fade ? styles.fadeIn : styles.fadeOut
                  }`}
                  style={{ backgroundImage: `url(${activeFeaturedProduct.image})` }}
                >
                  <div className={styles.overlay}>
                    <h2>
                      Indoor <span>furniture</span>
                    </h2>
                    <p>Save up to 50% of all furniture</p>
                    <button className={styles.shopNow}>Shop now</button>
                  </div>
                </div>
                <div className={styles.arrows}>
                  <button
                    className={`${styles.arrowLeft} ${
                      activeArrow === 'left' ? styles.active : ''
                    }`}
                    onClick={handleFeaturedArrowLeftClick}
                  >
                    &lt;
                  </button>
                  <button
                    className={`${styles.arrowRight} ${
                      activeArrow === 'right' ? styles.active : ''
                    }`}
                    onClick={handleFeaturedArrowRightClick}
                  >
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
