import React, { useEffect, useState } from 'react';
import styles from './TabContent.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const TabContent = ({ id, activeLink, isFade, setIsFade, children }) => {
  useEffect(() => {
    if (activeLink === id) {
      setTimeout(() => {
        setIsFade(false);
      }, 300);
    }
  }, [activeLink, id]);

  return (
    <div
      role='tabpanel'
      className={`tab-pane ${
        activeLink === id
          ? clsx(styles.activeTabContent, isFade && styles.fadeOut, 'active')
          : ''
      }`}
      id={id}
    >
      {children}
    </div>
  );
};

TabContent.propTypes = {
  id: PropTypes.string,
  activeLink: PropTypes.string,
  isFade: PropTypes.bool,
  setIsFade: PropTypes.func,
  children: PropTypes.node,
};

export default TabContent;
