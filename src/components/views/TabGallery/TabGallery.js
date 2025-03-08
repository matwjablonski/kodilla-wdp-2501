import React, { useState } from 'react';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import TabItem from '../../common/TabItem/TabItem';
import TabContent from '../../common/TabContent/TabContent';
import TopSeller from '../TopSeller/TopSeller';

const TabGallery = () => {
  const [activeTab, setActiveTab] = useState('top-seller');

  const handleTabClick = tabId => {
    setActiveTab(tabId);
  };

  return (
    <div className='col-6'>
      <SectionHeader>Furniture Gallery</SectionHeader>
      <div className='pt-4'>
        <ul className='nav nav-tabs' role='tablist'>
          <TabItem id='featured' activeLink={activeTab} action={handleTabClick}>
            Featured
          </TabItem>
          <TabItem id='top-seller' activeLink={activeTab} action={handleTabClick}>
            Top seller
          </TabItem>
          <TabItem id='sale-off' activeLink={activeTab} action={handleTabClick}>
            Sale off
          </TabItem>
          <TabItem id='top-rated' activeLink={activeTab} action={handleTabClick}>
            Top rated
          </TabItem>
        </ul>
        <div className='tab-content'>
          <TabContent id='featured' activeLink={activeTab}>
            <div>Content</div>
          </TabContent>
          <TabContent id='top-seller' activeLink={activeTab}>
            <TopSeller />
          </TabContent>
          <TabContent id='sale-off' activeLink={activeTab}>
            <div>Content</div>
          </TabContent>
          <TabContent id='top-rated' activeLink={activeTab}>
            <div>Content</div>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default TabGallery;
