import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TabContentItem.module.scss';
import clsx from 'clsx';
import CompareBtn from '../../features/CompareBtn/CompareBtn';
import Button from '../../common/Button/Button';
import FavoriteBtn from '../../features/FavoriteBtn/FavoriteBtn';
import StarRating from '../../features/StarRating/StarRating';
import { setPartsWithImages } from '../../../utils/setPartWithImages';
import Slider from '../../common/Slider/Silder';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faEye } from '@fortawesome/free-solid-svg-icons';

const TabContentItem = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(products[0]);
  const [isOldPrice, setOldPrice] = useState(false);
  const [isFade, setIsFade] = useState(false);
  const [imagesInRow, setImagesInRow] = useState(6);

  useEffect(() => {
    const calculateItemsInRow = () => {
      const width = window.innerWidth;

      if (width < 460) {
        setImagesInRow(3);
      } else if (width < 500) {
        setImagesInRow(5);
      } else if (width < 600) {
        setImagesInRow(5);
      } else if (width < 768) {
        setImagesInRow(6);
      } else if (width < 1024) {
        setImagesInRow(4);
      } else if (width < 1200) {
        setImagesInRow(5);
      } else {
        setImagesInRow(6);
      }
    };

    calculateItemsInRow();

    window.addEventListener('resize', calculateItemsInRow);

    return () => window.removeEventListener('resize', calculateItemsInRow);
  }, []);

  useEffect(() => {
    if (!activeImage.oldPrice) setOldPrice(false);
    else setOldPrice(true);
  }, [activeImage.oldPrice]);

  const showProduct = part => {
    setIsFade(true);
    setActiveImage(part);
    setTimeout(() => {
      setIsFade(false);
    }, 300);
  };

  const imageParts = setPartsWithImages(products, imagesInRow);

  return (
    <div className={styles.tabContent}>
      <div
        className={clsx(styles.photo, isFade && styles.fadeOut)}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/products/${activeImage.category}/${activeImage.category}-${activeImage.id}.jpg)`,
        }}
      >
        <div className={styles.outlines}>
          <FavoriteBtn
            id={activeImage.id}
            name={activeImage.name}
            price={activeImage.price}
            category={activeImage.category}
          />
          <CompareBtn
            isCompared={activeImage.isCompared}
            id={activeImage.id}
            category={activeImage.category}
          />
          <Button
            variant='outline'
            data-tooltip-id='Add to cart'
            data-title='Add to cart'
          >
            <FontAwesomeIcon icon={faShoppingBasket}>Add to cart</FontAwesomeIcon>
          </Button>
          <Button variant='outline' className={styles.topBtn} data-title='View'>
            <FontAwesomeIcon icon={faEye}>View</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.sale}>
          <div className={styles.price}>
            $
            <span>
              {activeImage.price && !isNaN(activeImage.price)
                ? activeImage.price.toFixed(2)
                : 'N/A'}
            </span>
          </div>
          {isOldPrice && (
            <div className={styles.oldPrice}>
              {activeImage.oldPrice && !isNaN(activeImage.oldPrice)
                ? activeImage.oldPrice.toFixed(2)
                : ''}
            </div>
          )}
          {!isOldPrice && <div className={styles.slogan}>Hot price!</div>}
        </div>
        <div className={styles.product}>
          <h5>{activeImage.name}</h5>
          <StarRating stars={activeImage.stars} myRating={activeImage.myRating} />
        </div>
      </div>
      <Slider
        imageParts={imageParts}
        activePart={activeIndex}
        setActivePart={setActiveIndex}
      >
        {imageParts.map((part, index) => (
          <div key={index}>
            <div className='d-flex flex-row flex-nowrap justify-content-center'>
              {index === activeIndex &&
                part.map((image, i) => (
                  <div
                    className={clsx(
                      styles.imageCarousel,
                      activeImage === part[i] ? styles.activeImage : ''
                    )}
                    key={i}
                    onClick={() => showProduct(part[i])}
                  >
                    <img
                      className='d-block w-100 h-100'
                      src={`${process.env.PUBLIC_URL}/images/products/${image.category}/${image.category}-${image.id}.jpg`}
                      alt={`slide-image ${index * 6 + i}`}
                    />
                    <div className={styles.layer}></div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

TabContentItem.propTypes = {
  products: PropTypes.array,
};

export default TabContentItem;
