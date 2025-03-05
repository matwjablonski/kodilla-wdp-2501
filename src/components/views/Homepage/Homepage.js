import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Featured from '../../features/Featured/Featured';
import Feedback from '../../features/Feedback/Feedback';

const Homepage = () => (
  <div className={styles.root}>
    <Featured />
    <FeatureBoxes />
    <NewFurniture />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
