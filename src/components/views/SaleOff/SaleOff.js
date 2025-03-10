import React from 'react';
import { useSelector } from 'react-redux';
import { getBySale } from '../../../redux/productsRedux';
import TabContentItem from '../TabContentItem/TabContentItem';

const SaleOff = () => {
  const products = useSelector(getBySale);

  return <TabContentItem products={products} />;
};

export default SaleOff;
