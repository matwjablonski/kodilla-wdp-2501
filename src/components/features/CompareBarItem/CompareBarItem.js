import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './CompareBarItem.module.scss';
import Button from '../../common/Button/Button';
import { useDispatch } from 'react-redux';
import { removeFromCompare } from '../../../redux/compareReducer';
import { setCompareStatus } from '../../../redux/productsRedux';

const CompareBarItem = ({ id, category }) => {
  const dispatch = useDispatch();

  const remove = e => {
    e.preventDefault();
    dispatch(removeFromCompare(id));
    dispatch(setCompareStatus({ id, isCompared: false }));
  };

  return (
    <div className={clsx(styles.imageWrapper, 'py-2 col-3')}>
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
