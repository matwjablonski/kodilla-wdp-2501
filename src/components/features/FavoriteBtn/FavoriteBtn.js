import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button.js';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../../redux/favoritesRedux.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import styles from './FavoriteBtn.module.scss';

const FavoriteBtn = ({ id, name, price, category }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  const isFavorite = favorites.some(fav => fav.id === id);

  const handleClick = e => {
    e.preventDefault();
    if (isFavorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites({ id, name, price, category }));
    }
  };

  return (
    <Button
      variant='outline'
      className={`${styles.btn} ${isFavorite ? styles.active : ''}`}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={isFavorite ? solidHeart : regularHeart} />
    </Button>
  );
};

FavoriteBtn.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default FavoriteBtn;
