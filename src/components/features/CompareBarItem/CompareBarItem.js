import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './CompareBarItem.module.scss';
import Button from '../../common/Button/Button';

const CompareBarItem = ({ id, category, action }) => {
  const remove = e => {
    e.preventDefault();
    action(id);
  };

  return (
    <div className={clsx(styles.imageWrapper, 'py-2 col-3')}>
      <img
        className='img-thumbnail'
        alt='product-image'
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
  action: PropTypes.func.isRequired,
};

export default CompareBarItem;
