import React from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Slider = ({ imageParts, children, activePart, setActivePart }) => {
  const nextSlide = () => {
    if (activePart < imageParts.length - 1) {
      setActivePart(activePart + 1);
    } else {
      setActivePart(0);
    }
  };

  const prevSlide = () => {
    if (activePart > 0) {
      setActivePart(activePart - 1);
    } else {
      setActivePart(imageParts.length - 1);
    }
  };

  return (
    <div className='my-2'>
      <div className='row d-flex flex-row flex-nowrap justify-content-center align-items-stretch'>
        <button className={styles.sliderBtn} onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {children}
        <button className={styles.sliderBtn} onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.node,
  imageParts: PropTypes.array,
  activePart: PropTypes.number,
  setActivePart: PropTypes.func,
};

export default Slider;
