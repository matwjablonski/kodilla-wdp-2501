import React from 'react';
//import styles from './Gallery.module.scss';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import TabItem from '../../common/TabItem/TabItem';
import TabContent from '../../common/TabContent/TabContent';

const Gallery = () => {
  return (
    <div className='container d-flex justify-content align-items-center'>
      <div className='col-6'>
        <SectionHeader>Furniture Gallery</SectionHeader>
        <ul className='nav nav-tabs' role='tablist'>
          <TabItem id='featured'>Featured</TabItem>
          <TabItem id='top-seller' activeLink={'top-seller'}>
            Top seller
          </TabItem>
          <TabItem id='sale-off'>Sale off</TabItem>
          <TabItem id='top-rated'>Top rated</TabItem>
        </ul>
        <div className='tab-content'>
          <TabContent id='top-seller' activeLink={'top-seller'}>
            Content
          </TabContent>
        </div>
      </div>
      <div className='col-6'>Advert</div>
    </div>
  );
};

export default Gallery;
