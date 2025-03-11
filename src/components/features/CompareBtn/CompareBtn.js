import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './CompareBtn.module.scss';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import {
  updateFullCompare,
  getComparedFullProducts,
} from '../../../redux/compareFullReducer';
import { useDispatch } from 'react-redux';
import {
  addToCompare,
  removeFromCompare,
  getComparedProducts,
} from '../../../redux/compareReducer';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const CompareBtn = ({ id, category }) => {
  const dispatch = useDispatch();
  const productsSelected = useSelector(getComparedProducts);
  const fullCompared = useSelector(getComparedFullProducts);
  const isCompared = productsSelected.find(
    productSelected => productSelected.id === id
  );

  useEffect(() => {
    if (productsSelected.length === 4) {
      dispatch(updateFullCompare(true));
    } else {
      dispatch(updateFullCompare(false));
    }
  }, [productsSelected, dispatch]);

  const clickedToCompare = e => {
    e.preventDefault();
    if (id && !isCompared) {
      if (productsSelected.length < 4) {
        dispatch(addToCompare({ id, category }));
      }
    } else {
      dispatch(removeFromCompare(id));
    }
  };

  return (
    <span>
      <Button
        variant='outline'
        className={clsx(isCompared && styles.active, fullCompared && styles.disabled)}
        onClick={clickedToCompare}
      >
        <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
      </Button>
    </span>
  );
};

CompareBtn.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
};

export default CompareBtn;
