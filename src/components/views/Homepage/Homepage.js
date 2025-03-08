import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';
import DealsSection from '../../layout/Deals/Deals';
import { useSelector } from 'react-redux';
import { getComparedProducts } from '../../../redux/compareReducer';
import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Featured from '../../features/Featured/Featured';
import Gallery from '../Gallery/Gallery';
import Brands from '../../features/Brands/Brands';
import Feedback from '../../features/Feedback/Feedback';
import CompareBar from '../../features/CompareBar/CompareBar';

const Homepage = () => {
  const comparedProducts = useSelector(getComparedProducts);

  return (
    <div className={styles.root}>
      <Featured />
      <FeatureBoxes />
      <DealsSection />
      <NewFurniture />
      <Gallery />
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
