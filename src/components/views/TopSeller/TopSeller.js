import React from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import TabContentItem from '../TabContentItem/TabContentItem';

const TopSeller = () => {
  const products = useSelector(getAll);

  return <TabContentItem products={products} />;
};

export default TopSeller;
