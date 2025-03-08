import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './../../layout/TopBar/TopBar.module.scss';
import { updateUserData, updateLoggedStatus } from '../../../redux/loggedUserRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ModalBox from '../../common/ModalBox/ModalBox';
import FormLogin from '../FormLogin/FormLogin';
import PropTypes from 'prop-types';

const Login = ({ userEmail, setUserEmail, userPassword, setUserPassword }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setShowModal(true);
  };

  const handleFormLoginSubmit = e => {
    e.preventDefault();
    dispatch(updateLoggedStatus(true));
    dispatch(updateUserData({ email: userEmail, password: userPassword }));
    setShowModal(false);
  };

  return (
    <li>
      <a className={styles.textHidden} href='#' onClick={openModal}>
        <FontAwesomeIcon className={styles.icon} icon={faUser} /> Login
        {showModal && (
          <ModalBox
            title='Log in'
            description={
              <FormLogin
                userEmail={userEmail}
                setUserEmail={setUserEmail}
                userPassword={userPassword}
                setUserPassword={setUserPassword}
              />
            }
            typeBtn='submit'
            onClose={handleFormLoginSubmit}
          />
        )}
      </a>
    </li>
  );
};

Login.propTypes = {
  userEmail: PropTypes.string,
  userPassword: PropTypes.string,
  setUserEmail: PropTypes.func,
  setUserPassword: PropTypes.func,
};

export default Login;
