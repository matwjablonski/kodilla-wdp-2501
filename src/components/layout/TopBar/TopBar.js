import React from 'react';
// import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faUser,
  faLock,
  faBars,
  faDollarSign,
  faLanguage,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';

import styles from './TopBar.module.scss';

const TopBar = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className={`col C ${styles.topOptions}`}>
          <ul>
            <li>
              <a className={styles.iconForMobile} href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faDollarSign} />
              </a>
              <a className={styles.textForDesktop} href='#'>
                USD <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
            <li>
              <a className={styles.iconForMobile} href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faLanguage} />
              </a>
              <a className={styles.textForDesktop} href='#'>
                English <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
            <li>
              <a className={styles.iconForMobile} href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faQuestion} />
              </a>
              <a className={styles.textForDesktop} href='#'>
                Help <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
              </a>
            </li>
          </ul>
        </div>
        <div className={`col text-right ${styles.topMenu}`}>
          <ul>
            <li>
              <a href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faUser} /> Login
              </a>
            </li>
            <li>
              <a href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faLock} /> Register
              </a>
            </li>
            <li>
              <a href='#'>
                <FontAwesomeIcon className={styles.icon} icon={faBars} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// TopBar.propTypes = {};

export default TopBar;
