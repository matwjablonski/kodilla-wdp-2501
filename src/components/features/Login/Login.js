import React, { useState } from 'react';
import styles from './Login.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import ModalBox from '../../common/ModalBox/ModalBox';
import FormLogin from '../FormLogin/FormLogin';

const Login = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const onSubmit = () => {
    setShowModal(false);
  };

  return (
    <li>
      <a className={styles.textHidden} href='#' onClick={openModal}>
        <FontAwesomeIcon className={styles.icon} icon={faUser} /> Login
        {showModal && (
          <ModalBox
            title='Log in'
            description={<FormLogin />}
            typeBtn='submit'
            onClose={onSubmit}
          />
        )}
      </a>
    </li>
  );
};

export default Login;
