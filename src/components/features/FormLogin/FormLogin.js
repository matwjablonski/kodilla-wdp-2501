import React from 'react';
import './FormLogin.module.scss';

const FormLogin = () => {
  return (
    <form className='d-flex flex-column justify-content-center align-items-center'>
      <input type='email' placeholder='Ener email' />
      <input type='password' placeholder='Password' />
    </form>
  );
};

export default FormLogin;
