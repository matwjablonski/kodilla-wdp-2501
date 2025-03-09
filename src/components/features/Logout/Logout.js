import React from 'react';
import './../../layout/TopBar/TopBar.module.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeUserData, updateLoggedStatus } from '../../../redux/loggedUserRedux';

const Logout = ({ setUserEmail, setUserPassword, userId }) => {
  const dispatch = useDispatch();

  const logout = e => {
    e.preventDefault();
    dispatch(removeUserData(userId));
    dispatch(updateLoggedStatus(false));
    setUserEmail('');
    setUserPassword('');
  };

  return (
    <li>
      <a href='#' onClick={logout}>
        Logout
      </a>
    </li>
  );
};

Logout.propTypes = {
  userId: PropTypes.string,
  setUserEmail: PropTypes.string,
  setUserPassword: PropTypes.string,
};

export default Logout;
