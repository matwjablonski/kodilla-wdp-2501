import React from 'react';
import clsx from 'clsx';
import styles from './TabItem.module.scss';
import PropTypes from 'prop-types';

const TabItem = ({ id, activeLink, onClick, children }) => {
  const isActive = activeLink === id;

  return (
    <li role='presentation' className={clsx('nav-item', styles.tabItem)}>
      <a
        href={`#${id}`}
        className={`nav-link ${isActive ? clsx('active', styles.activeLink) : ''}`}
        aria-controls={id}
        role='tab'
        data-toggle='tab'
        onClick={e => onClick(id, e)}
      >
        {children}
      </a>
    </li>
  );
};

TabItem.propTypes = {
  id: PropTypes.string,
  activeLink: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default TabItem;
