import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductSearch from '../../features/ProductSearch/ProductSearch';
import styles from './MenuBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MenuBar = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
                <li>
                  <a href='#' className={styles.active}>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#'>Furniture</a>
                </li>
                <li>
                  <a href='#'>Chair</a>
                </li>
                <li>
                  <a href='#'>Table</a>
                </li>
                <li>
                  <a href='#'>Sofa</a>
                </li>
                <li>
                  <a href='#'>Bedroom</a>
                </li>
                <li>
                  <a href='#'>Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className={`d-md-none ${styles.dropdownMenu}`}>
            <ul>
              <li>
                <a href='#' className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href='#'>Furniture</a>
              </li>
              <li>
                <a href='#'>Chair</a>
              </li>
              <li>
                <a href='#'>Table</a>
              </li>
              <li>
                <a href='#'>Sofa</a>
              </li>
              <li>
                <a href='#'>Bedroom</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
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
