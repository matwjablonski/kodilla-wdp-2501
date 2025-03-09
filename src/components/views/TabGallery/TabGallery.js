import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './TabGallery.module.scss';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import TabItem from '../../common/TabItem/TabItem';
import TabContent from '../../common/TabContent/TabContent';
import TopSeller from '../TopSeller/TopSeller';
import FeaturedBoxGallery from '../FeaturedBoxGallery/FeaturedBoxGallery';
import SaleOff from '../SaleOff/SaleOff';
import TopRated from '../TopRated/TopRated';

const TabGallery = () => {
  const [activeTab, setActiveTab] = useState('top-seller');
  const [isFade, setIsFade] = useState(false);

  const handleTabClick = tabId => {
    setIsFade(true);
    setActiveTab(tabId);
  };

  return (
    <div className={clsx(styles.tabGallery, 'col-12 col-md-6')}>
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
          <TabContent
            id='featured'
            isFade={isFade}
            setIsFade={setIsFade}
            activeLink={activeTab}
          >
            <FeaturedBoxGallery />
          </TabContent>
          <TabContent
            id='top-seller'
            isFade={isFade}
            setIsFade={setIsFade}
            activeLink={activeTab}
          >
            <TopSeller />
          </TabContent>
          <TabContent
            id='sale-off'
            isFade={isFade}
            setIsFade={setIsFade}
            activeLink={activeTab}
          >
            <SaleOff />
          </TabContent>
          <TabContent
            id='top-rated'
            isFade={isFade}
            setIsFade={setIsFade}
            activeLink={activeTab}
          >
            <TopRated />
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default TabGallery;
