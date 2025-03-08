import React from 'react';
import './FormLogin.module.scss';
import PropTypes from 'prop-types';

const FormLogin = ({
  userEmail,
  setUserEmail,
  userPassword,
  setUserPassword,
  showAlert,
  messageAlert,
}) => {
  return (
    <div>
      {showAlert && (
        <div className='alert alert-warning alert-dismissible fade show' role='alert'>
          {messageAlert}
        </div>
      )}
      <form className='d-flex flex-column justify-content-center align-items-center'>
        <input
          type='email'
          value={userEmail}
          onChange={e => setUserEmail(e.target.value)}
          onSubmit={() => setUserEmail('')}
          placeholder='Ener email'
        />
        <input
          type='password'
          value={userPassword}
          onChange={e => setUserPassword(e.target.value)}
          onSubmit={e => setUserPassword('')}
          placeholder='Password'
        />
      </form>
    </div>
  );
};

FormLogin.propTypes = {
  userEmail: PropTypes.string,
  userPassword: PropTypes.string,
  setUserEmail: PropTypes.func,
  setUserPassword: PropTypes.func,
  showAlert: PropTypes.bool,
  messageAlert: PropTypes.string,
};

export default FormLogin;
