import React, { useState } from 'react';
import './FormLogin.module.scss';

const FormLogin = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  return (
    <form className='d-flex flex-column justify-content-center align-items-center'>
      <input
        type='email'
        value={userEmail}
        onChange={e => setUserEmail(e.target.value)}
        placeholder='Ener email'
      />
      <input
        type='password'
        value={userPassword}
        onChange={e => setUserPassword(e.target.value)}
        placeholder='Password'
      />
    </form>
  );
};

export default FormLogin;
