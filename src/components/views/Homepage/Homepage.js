import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';
import DealsSection from '../../layout/Deals/Deals';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <DealsSection />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
