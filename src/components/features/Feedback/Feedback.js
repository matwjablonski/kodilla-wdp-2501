
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllFeedback } from '../../../redux/feedbackRedux';
import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';

const Feedback = () => {
  const feedback = useSelector(getAllFeedback);
  const displayedFeedback = feedback.length > 3 ? feedback.slice(-3) : feedback;
  const [activeIndex, setActiveIndex] = useState(0);
  const currentFeedback = displayedFeedback[activeIndex];

  const nextFeedback = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % displayedFeedback.length);
  };

  const prevFeedback = () => {
    setActiveIndex(
      prevIndex => (prevIndex - 1 + displayedFeedback.length) % displayedFeedback.length
    );
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={`col-auto ${styles.heading}`}>
              <h3>Client feedback</h3>
            </div>
            <div className='col' />
            <div className={`col-auto ${styles.dots}`}>
              <ul>
                {displayedFeedback.map((fb, index) => (
                  <li key={fb.id}>
                    <a
                      href='#'
                      className={activeIndex === index ? styles.active : ''}
                      aria-label={`Slide ${index + 1}`}
                      onClick={e => {
                        e.preventDefault();
                        setActiveIndex(index);
                      }}
                    ></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.quoteIcon}>
          <FontAwesomeIcon icon={faQuoteRight} />
        </div>
        <Swipeable swipeLeft={nextFeedback} swipeRight={prevFeedback}>
          {currentFeedback ? (
            <div className={styles.feedbackItem}>
              <p className={styles.text}>{currentFeedback.text}</p>
              <div className={styles.authorBox}>
                <img src={currentFeedback.image} alt={currentFeedback.author} />
                <div className={styles.authorInfo}>
                  <h3>{currentFeedback.author}</h3>
                  <p>{currentFeedback.position}</p>
                </div>
              </div>
            </div>
          ) : (
            <p>No feedback available.</p>
          )}
        </Swipeable>
      </div>
    </div>
  );
};

export default Feedback;
