import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBasket,
  faExchangeAlt,
  faStar as fasStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar, faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import styles from './PromotedBox.module.scss';

const calculateTimeLeft = endTime => {
  const total = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
};

const PromotedBox = ({ hotDeal, dotsCount, activeDot, onDotClick }) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const timerRef = useRef(null);

  const startTimer = () => {
    setTimeLeft(calculateTimeLeft(hotDeal.hotDealsEndTime));
    timerRef.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft(hotDeal.hotDealsEndTime));
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimeLeft(null);
    }
  };

  useEffect(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      startTimer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hotDeal]);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h2>Hot deals</h2>
        <div className={styles.dots}>
          {dotsCount &&
            Array.from({ length: dotsCount }).map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${activeDot === index ? styles.active : ''}`}
                onClick={() => onDotClick(index)}
              ></span>
            ))}
        </div>
      </div>
      <div
        className={styles.imageWrapper}
        onMouseEnter={startTimer}
        onMouseLeave={stopTimer}
      >
        <img src={hotDeal.image} alt={hotDeal.name} />
        {hotDeal.promo && <div className={styles.sale}>{hotDeal.promo}</div>}
        <div className={styles.hoverElements}>
          <Button variant='small' className={styles.addToCartBtn}>
            <FontAwesomeIcon icon={faShoppingBasket} /> Add to cart
          </Button>
          {timeLeft && (
            <div className={styles.countdown}>
              <div className={styles.timerBox}>
                <span>{timeLeft.days}</span> DAYS
              </div>
              <div className={styles.timerBox}>
                <span>{timeLeft.hours}</span> HRS
              </div>
              <div className={styles.timerBox}>
                <span>{timeLeft.minutes}</span> MINS
              </div>
              <div className={styles.timerBox}>
                <span>{timeLeft.seconds}</span> SECS
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.content}>
        <h5>{hotDeal.name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= (hotDeal.stars || 0) ? (
                <FontAwesomeIcon icon={fasStar} />
              ) : (
                <FontAwesomeIcon icon={faStar} />
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.icons}>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faEye} />
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faHeart} />
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faExchangeAlt} />
          </Button>
        </div>
        <div className={styles.prices}>
          {hotDeal.oldPrice && (
            <div className={styles.oldPrice}>$ {hotDeal.oldPrice.toFixed(2)}</div>
          )}
          <div className={styles.newPrice}>$ {hotDeal.price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

PromotedBox.propTypes = {
  hotDeal: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string,
    name: PropTypes.string,
    oldPrice: PropTypes.number,
    price: PropTypes.number.isRequired,
    promo: PropTypes.string,
    stars: PropTypes.number,
    hotDealsEndTime: PropTypes.string.isRequired,
  }).isRequired,
  dotsCount: PropTypes.number,
  activeDot: PropTypes.number,
  onDotClick: PropTypes.func,
};

export default PromotedBox;
