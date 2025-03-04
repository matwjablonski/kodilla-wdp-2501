import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import styles from './TopSeller.module.scss';
import clsx from 'clsx';
import Button from '../../common/Button/Button';
import StarRating from '../../features/StarRating/StarRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const TopSeller = () => {
  const products = useSelector(getAll);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(products[0]);
  const [isOldPrice, setOldPrice] = useState(false);

  useEffect(() => {
    if (!activeImage.oldPrice) setOldPrice(false);
    else setOldPrice(true);
  }, [activeImage.oldPrice]);

  const partOfImages = images => {
    const selectedImages = [];
    for (let i = 0; i < images.length; i += 6) {
      selectedImages.push(images.slice(i, i + 6));
    }
    return selectedImages;
  };

  const imageParts = partOfImages(products);

  const nextSlide = () => {
    if (activeIndex < imageParts.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setActiveIndex(0);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      setActiveIndex(imageParts.length - 1);
    }
  };

  return (
    <div>
      <div
        className={styles.photo}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/products/beds/${activeImage.category}-${activeImage.id}.jpg)`,
        }}
      >
        <div className={styles.outlines}>
          <div>
            <Button variant='outline'>
              <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
            </Button>
          </div>
          <div>
            <Button variant='outline' data-testid='compare-test'>
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
            </Button>
          </div>
          <div>
            <Button variant='outline'>
              <FontAwesomeIcon icon={faShoppingBasket}>Add to cart</FontAwesomeIcon>
            </Button>
          </div>
          <div>
            <Button variant='outline' className={styles.topBtn}>
              <FontAwesomeIcon icon={faEye}>View</FontAwesomeIcon>
            </Button>
          </div>
        </div>
        <div className={styles.sale}>
          <div className={styles.price}>${activeImage.price}</div>
          {isOldPrice && <div className={styles.oldPrice}>${activeImage.oldPrice}</div>}
          {!isOldPrice && <div className={styles.slogan}>Hot price!</div>}
        </div>
        <div className={styles.product}>
          <h5>{activeImage.name}</h5>
          <StarRating stars={activeImage.stars} myRating={activeImage.myRating} />
        </div>
      </div>
      <div className='my-2'>
        <div className='row d-flex flex-row flex-nowrap justify-content-center'>
          <button className={styles.prevBtn} onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          {imageParts.map((part, index) => (
            <div key={index} className={`image-slide ${index === 0 ? 'active' : ''}`}>
              <div className='d-flex flex-row flex-nowrap justify-content-center'>
                {index === activeIndex &&
                  part.map((image, i) => (
                    <div
                      className={clsx(
                        styles.imageCarousel,
                        activeImage === part[i] ? styles.activeImage : ''
                      )}
                      key={i}
                      onClick={() => setActiveImage(part[i])}
                    >
                      <img
                        className='d-block w-100 h-100'
                        src={`${process.env.PUBLIC_URL}/images/products/beds/${image.category}-${image.id}.jpg`}
                        alt={`slide-image ${index * 6 + i}`}
                      />
                      <div className={styles.layer}></div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
          <button className={styles.nextBtn} onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
