import React from 'react';
import styles from './Gallery.module.scss';
import clsx from 'clsx';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import TabItem from '../../common/TabItem/TabItem';
import TabContent from '../../common/TabContent/TabContent';
import TopSeller from '../TopSeller/TopSeller';

const Gallery = () => {
  return (
    <div className='container d-flex flex-row justify-content-center align-items-stretch my-4 p-2'>
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
      <div className={clsx(styles.advertWrapper, 'col-6 py-2')}>
        <img
          className={styles.advertImage}
          src={`${process.env.PUBLIC_URL}/images/products/beds/bed-aenean-ru-bristique-18.jpg`}
          alt='bedroom'
        />
        <div className={styles.advertItem}>
          <h4>
            from <span>$ 30.00</span>
          </h4>
          <h2>Bedroom Bed</h2>
          <a href='#'>Show now</a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
