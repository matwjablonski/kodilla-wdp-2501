import React from 'react';
import './../../layout/TopBar/TopBar.module.scss';
import styles from './WelcomeUserText.module.scss';
import PropTypes from 'prop-types';

const WelcomeUserText = ({ userName }) => {
  return (
    <li className={styles.welcome}>
      Hello, <span>{userName}</span>!
    </li>
  );
};

WelcomeUserText.propTypes = {
  userName: PropTypes.string,
};

export default WelcomeUserText;
