import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setDeviceMode } from '../../../redux/deviceRedux';

import Header from '../Header/Header';
import Feedback from '../../features/Feedback/Feedback';
import Footer from '../Footer/Footer';

const getDeviceMode = width => {
  if (width >= 992) return 'desktop';
  if (width >= 768) return 'tablet';
  return 'mobile';
};

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setDeviceMode(getDeviceMode(window.innerWidth)));
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

  return (
    <div>
      <Header />
      {children}
      <Feedback />
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
