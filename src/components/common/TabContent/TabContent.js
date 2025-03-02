import React from 'react';
import styles from './TabContent.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const TabContent = ({ id, activeLink, children }) => {
  return (
    <div
      role='tabpanel'
      className={`tab-pane ${
        activeLink === id ? clsx(styles.activeTabContent, 'active') : ''
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
  children: PropTypes.node,
};

export default TabContent;
