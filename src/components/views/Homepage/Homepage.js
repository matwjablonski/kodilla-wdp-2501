import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';
import DealsSection from '../../layout/Deals/Deals';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/Feedback';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <DealsSection />
    <NewFurniture />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
