import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './StarRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ stars }) => {
  const [myRating, setMyRating] = useState(null);
  const [isHovered, setIsHovered] = useState(null);

  if (myRating && myRating > 0 && myRating <= 5) stars = myRating;
  if (isHovered && isHovered > 0 && isHovered <= 5) stars = isHovered;

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <a
          key={i}
          href='#'
          onMouseEnter={() => setIsHovered(i)}
          onMouseLeave={() => setIsHovered(null)}
          onClick={e => {
            e.preventDefault();
            setMyRating(i);
          }}
        >
          {i <= stars ? (
            <FontAwesomeIcon
              className={myRating || isHovered ? styles.setRating : ''}
              icon={faStar}
            >
              {i} stars
            </FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
          )}
        </a>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  stars: PropTypes.number,
};

export default StarRating;
