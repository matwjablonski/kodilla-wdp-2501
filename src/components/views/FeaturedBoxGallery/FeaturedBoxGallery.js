import React from 'react';
import { useSelector } from 'react-redux';
import { featuredProducts } from '../../../redux/productsRedux';
import TabContentItem from '../TabContentItem/TabContentItem';

const FeaturedBoxGallery = () => {
  const products = useSelector(featuredProducts);

  return <TabContentItem products={products} />;
};

export default FeaturedBoxGallery;
