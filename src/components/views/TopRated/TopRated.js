import React from 'react';
import { useSelector } from 'react-redux';
import { getByRated } from '../../../redux/productsRedux';
import TabContentItem from '../TabContentItem/TabContentItem';

const TopRated = () => {
  const products = useSelector(getByRated);

  return <TabContentItem products={products} />;
};

export default TopRated;
