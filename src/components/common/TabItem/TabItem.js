import React from 'react';
import clsx from 'clsx';
import styles from './TabItem.module.scss';
import PropTypes from 'prop-types';

const TabItem = ({ id, activeLink, action, children }) => {
  const isActive = activeLink === id;

  return (
    <li role='presentation' className={clsx('nav-item', styles.tabItem)}>
      <a
        href={`#${id}`}
        className={`nav-link ${isActive ? clsx('active', styles.activeLink) : ''}`}
        aria-controls={id}
        role='tab'
        data-toggle='tab'
        onClick={e => {
          e.preventDefault();
          action(id);
        }}
      >
        {children}
      </a>
    </li>
  );
};

TabItem.propTypes = {
  id: PropTypes.string,
  activeLink: PropTypes.string,
  children: PropTypes.node,
  action: PropTypes.func,
};

export default TabItem;
