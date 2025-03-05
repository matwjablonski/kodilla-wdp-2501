import React from 'react';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import TabItem from '../../common/TabItem/TabItem';
import TabContent from '../../common/TabContent/TabContent';
import TopSeller from '../TopSeller/TopSeller';

const TabGallery = () => {
  return (
    <div className='col-6'>
      <SectionHeader>Furniture Gallery</SectionHeader>
      <div className='pt-4'>
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
  );
};

export default TabGallery;
