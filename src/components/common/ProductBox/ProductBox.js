import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import StarRating from '../../features/StarRating/StarRating';

const ProductBox = ({
  id,
  category,
  name,
  oldPrice,
  price,
  promo,
  stars,
  action,
  isFavorite,
  isCompared,
  myRating,
}) => {
  const handleClick = e => {
    e.preventDefault();
    action({ id, category });
  };
  return (
    <div className={styles.root}>
      <div
        className={styles.photo}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/products/${category}/${category}-${id}.jpg)`,
        }}
      >
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <StarRating stars={stars} myRating={myRating} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline' className={isFavorite ? styles.active : ''}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            data-testid='compare-test'
            className={isCompared ? styles.active : ''}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          {oldPrice && <div className={styles.oldPrice}>$ {oldPrice.toFixed(2)}</div>}
          <Button noHover variant='small' className={styles.priceBtn}>
            $ {price.toFixed(2)}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  category: PropTypes.string,
  name: PropTypes.string,
  oldPrice: PropTypes.number,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  isFavorite: PropTypes.bool,
  isCompared: PropTypes.bool,
  myRating: PropTypes.number,
  action: PropTypes.func,
};

export default ProductBox;
