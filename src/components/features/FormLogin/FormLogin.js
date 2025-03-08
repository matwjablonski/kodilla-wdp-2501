import React from 'react';
import './FormLogin.module.scss';
import PropTypes from 'prop-types';

const FormLogin = ({ userEmail, setUserEmail, userPassword, setUserPassword }) => {
  return (
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
  );
};

FormLogin.propTypes = {
  userEmail: PropTypes.string,
  userPassword: PropTypes.string,
  setUserEmail: PropTypes.func,
  setUserPassword: PropTypes.func,
};

export default FormLogin;
