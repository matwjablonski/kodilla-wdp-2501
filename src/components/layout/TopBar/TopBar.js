import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getLogStatus, getUserData } from '../../../redux/loggedUserRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faLock, faBars } from '@fortawesome/free-solid-svg-icons';
import Login from '../../features/Login/Login';
import Logout from '../../features/Logout/Logout';
import WelcomeUserText from '../../views/WelcomeUserText/WelcomeUserText';
import styles from './TopBar.module.scss';

const TopBar = () => {
  const isLogged = useSelector(getLogStatus);
  const userData = useSelector(getUserData);

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  useEffect(() => {
    if (userData.length > 0) setUserEmail(userData[0].email);
  }, [userData]);

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
              {!isLogged && (
                <Login
                  userEmail={userEmail}
                  setUserEmail={setUserEmail}
                  userPassword={userPassword}
                  setUserPassword={setUserPassword}
                />
              )}
              {isLogged && <WelcomeUserText userName={userEmail} />}
              {isLogged && (
                <Logout
                  userId={userEmail}
                  setUserPassword={setUserPassword}
                  setUserEmail={setUserEmail}
                />
              )}
              {!isLogged && (
                <li>
                  <a className={styles.textHidden} href='#'>
                    <FontAwesomeIcon className={styles.icon} icon={faLock} /> Register
                  </a>
                </li>
              )}
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
