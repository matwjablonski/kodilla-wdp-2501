import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getLogStatus, getUserData } from '../../../redux/loggedUserRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faLock, faBars } from '@fortawesome/free-solid-svg-icons';
import Login from '../../features/Login/Login';

import styles from './TopBar.module.scss';

const TopBar = () => {
  const isLogged = useSelector(getLogStatus);
  const userData = useSelector(getUserData);
  console.log(userData);
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col C ${styles.topOptions}`}>
            <ul>
              <li>
                <a href='#'>
                  USD <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
              <li>
                <a href='#'>
                  English <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
              <li>
                <a href='#'>
                  Help <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
                </a>
              </li>
            </ul>
          </div>
          <div className={`col text-right ${styles.topMenu}`}>
            <ul>
              {!isLogged && <Login />}
              {isLogged && (
                <li>
                  <span className={styles.textHidden}>Logged</span>!
                </li>
              )}
              <li>
                <a className={styles.textHidden} href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faLock} /> Register
                </a>
              </li>
              <li>
                <a className={styles.textHidden} href='#'>
                  <FontAwesomeIcon className={styles.icon} icon={faBars} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// TopBar.propTypes = {};

export default TopBar;
