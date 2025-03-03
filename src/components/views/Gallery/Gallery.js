import React from 'react';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import TabItem from '../../common/TabItem/TabItem';
import TabContent from '../../common/TabContent/TabContent';
import TopSeller from '../TopSeller/TopSeller';

const Gallery = () => {
  return (
    <div className='container d-flex justify-content align-items-center'>
      <div className='col-6'>
        <SectionHeader>Furniture Gallery</SectionHeader>
        <div className='my-3 py-2'>
          <ul className='nav nav-tabs' role='tablist'>
            <TabItem id='featured'>Featured</TabItem>
            <TabItem id='top-seller' activeLink={'top-seller'}>
              Top seller
            </TabItem>
            <TabItem id='sale-off'>Sale off</TabItem>
            <TabItem id='top-rated'>Top rated</TabItem>
          </ul>
          <div className='tab-content'>
            <TabContent id='featured'>
              <div>Content</div>
            </TabContent>
            <TabContent id='top-seller' activeLink={'top-seller'}>
              <TopSeller />
            </TabContent>
            <TabContent id='sale-off'>
              <div>Content</div>
            </TabContent>
            <TabContent id='top-rated'>
              <div>Content</div>
            </TabContent>
          </div>
        </div>
      </div>
      <div className='col-6'>Advert</div>
    </div>
  );
};

export default Gallery;
