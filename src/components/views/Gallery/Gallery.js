import React from 'react';
import TabGallery from '../TabGallery/TabGallery';
import AdvertItem from '../AdvertItem/AdvertItem';

const Gallery = () => {
  return (
    <div className='container d-flex flex-row justify-content-center align-items-stretch my-4 p-2'>
      <TabGallery />
      <AdvertItem />
    </div>
  );
};

export default Gallery;
