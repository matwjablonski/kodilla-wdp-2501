import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './CompareBarItem.module.scss';
import Button from '../../common/Button/Button';
import { useDispatch } from 'react-redux';
import { removeFromCompare } from '../../../redux/compareReducer';

const CompareBarItem = ({ id, category }) => {
  const dispatch = useDispatch();

  const remove = e => {
    e.preventDefault();
    dispatch(removeFromCompare(id));
  };

  return (
    <div className={clsx(styles.imageWrapper, 'col-3 py-2')}>
      <img
        className='img-thumbnail'
        alt={`product-image-${id}`}
        src={`${process.env.PUBLIC_URL}/images/products/${category}/${category}-${id}.jpg`}
      />
      <Button className={styles.imageBtn} onClick={remove}>
        <span>x</span>
      </Button>
    </div>
  );
};

CompareBarItem.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default CompareBarItem;
