import React from 'react';
import { useSelector } from 'react-redux';
import { getAllFeedback } from '../../../redux/feedbackRedux';
import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Feedback = () => {
  const feedback = useSelector(getAllFeedback);
  const currentFeedback = feedback.length ? feedback[0] : null;

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>Client feedback</h3>
            </div>
            <div className='col' />
            <div className={'col-auto ' + styles.dots}>
              <ul>
                <li>
                  <a href='#' className={styles.active} aria-label='Slide 1'></a>
                </li>
                <li>
                  <a href='#' aria-label='Slide 2'></a>
                </li>
                <li>
                  <a href='#' aria-label='Slide 3'></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.quoteIcon}>
          <FontAwesomeIcon icon={faQuoteRight} />
        </div>
        {currentFeedback ? (
          <>
            <p className={styles.text}>{currentFeedback.text}</p>
            <div className={styles.authorBox}>
              <img src={currentFeedback.image} alt={currentFeedback.author} />
              <div className={styles.authorInfo}>
                <h3>{currentFeedback.author}</h3>
                <p>{currentFeedback.position}</p>
              </div>
            </div>
          </>
        ) : (
          <p>No feedback available.</p>
        )}
      </div>
    </div>
  );
};

export default Feedback;
