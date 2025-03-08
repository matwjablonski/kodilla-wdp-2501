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
  const [showAlert, setShowAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');
  const dispatch = useDispatch();

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = e => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (userEmail && regex.test(userEmail)) {
      if (userPassword && userPassword.length > 3) {
        e.preventDefault();
        dispatch(updateLoggedStatus(true));
        dispatch(updateUserData({ email: userEmail, password: userPassword }));
        setShowModal(false);
      } else {
        setShowAlert(true);
        setMessageAlert('Password must have more than 3 characters');
      }
    } else {
      setShowAlert(true);
      setMessageAlert('Wrong email... Try again.');
    }
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
                showAlert={showAlert}
                messageAlert={messageAlert}
              />
            }
            typeBtn='submit'
            onClose={closeModal}
            action={handleSubmit}
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
