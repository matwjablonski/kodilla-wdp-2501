import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { NavLink } from 'react-router-dom';
import styles from './MenuBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MenuBar = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'Furniture', to: '/shop/furniture' },
    { label: 'Chair', to: '/shop/chair' },
    { label: 'Table', to: '/shop/table' },
    { label: 'Sofa', to: '/shop/sofa' },
    { label: 'Bedroom', to: '/shop/bed' },
    { label: 'Blog', to: '/blog' },
  ];

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center no-gutters'>
          <div className='col-6 col-md-12 col-lg-6 d-flex align-items-center order-1 order-md-2 order-lg-1 py-3 py-md-2'>
            <ProductSearch />
            <div className='d-md-none'>
              <button onClick={toggleMenu} className={styles.menuButton}>
                <FontAwesomeIcon icon={faBars} className={styles.mobileButton} />
              </button>
            </div>
          </div>
          <div className='col-6 col-md-12 col-lg-6 d-flex align-items-center order-2 order-md-1 order-lg-2'>
            <div className={`d-none d-md-block ${styles.menu}`}>
              <ul>
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <NavLink exact to={item.to} activeClassName={styles.active}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className={`d-md-none ${styles.dropdownMenu}`}>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    exact
                    to={item.to}
                    activeClassName={styles.active}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
