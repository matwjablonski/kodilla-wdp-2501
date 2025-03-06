import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';
import { useSelector } from 'react-redux';
import { getComparedProducts } from '../../../redux/compareReducer';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Featured from '../../features/Featured/Featured';
import Brands from '../../features/Brands/Brands';
import Feedback from '../../features/Feedback/Feedback';
import CompareBar from '../../features/CompareBar/CompareBar';

const Homepage = () => {
  const comparedProducts = useSelector(getComparedProducts);

  return (
    <div className={styles.root}>
      <Featured />
      <FeatureBoxes />
      <NewFurniture />
      <Brands />
      <Feedback />
      {comparedProducts.length >= 1 && (
        <CompareBar productsSelected={comparedProducts} />
      )}
    </div>
  );
};

// Homepage.propTypes = {};

export default Homepage;
