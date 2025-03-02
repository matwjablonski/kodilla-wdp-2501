import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Swipeable = ({ children, swipeLeft, swipeRight }) => {
  const [startPositionX, setStartPositionX] = useState(0);
  const [endPositionX, setEndPositionX] = useState(0);

  const swipeStart = e => {
    setStartPositionX(e.touches[0].clientX);
  };

  const swipeMoveX = e => {
    setEndPositionX(e.touches[0].clientX);
  };

  const swipeDirection = e => {
    const moveDifference = startPositionX - endPositionX;
    if (moveDifference > 50) swipeLeft();
    if (moveDifference < -50) swipeRight();
  };

  return (
    <div onTouchStart={swipeStart} onTouchMove={swipeMoveX} onTouchEnd={swipeDirection}>
      {children}
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  swipeLeft: PropTypes.func,
  swipeRight: PropTypes.func,
};

export default Swipeable;
