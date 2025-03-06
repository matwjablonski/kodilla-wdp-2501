import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './CompareBtn.module.scss';
import { useSelector } from 'react-redux';
import { getComparedProducts } from '../../../redux/compareReducer';
import { setCompareStatus } from '../../../redux/productsRedux';
import clsx from 'clsx';
import {
  updateFullCompare,
  getComparedFullProducts,
} from '../../../redux/compareFullReducer';
import { useDispatch } from 'react-redux';
import { updateAlertStatus } from '../../../redux/alertReducer';
import { updateAlertMessage } from '../../../redux/alertReducer';
import { addToCompare } from '../../../redux/compareReducer';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const CompareBtn = ({ isCompared, id, category }) => {
  const dispatch = useDispatch();
  const productsSelected = useSelector(getComparedProducts);
  const fullCompared = useSelector(getComparedFullProducts);

  useEffect(() => {
    if (productsSelected.length === 4) {
      dispatch(updateFullCompare(true));
    } else {
      dispatch(updateFullCompare(false));
    }
  }, [productsSelected, dispatch]);

  const clickedToCompare = e => {
    e.preventDefault();
    if (id && !productsSelected.find(product => product.id === id)) {
      if (productsSelected.length < 4) {
        dispatch(addToCompare({ id, category }));
        dispatch(setCompareStatus({ id, isCompared: true }));
      } else {
        dispatch(updateAlertStatus(true));
        dispatch(updateAlertMessage('Only 4 products to compare!'));
      }
    } else {
      dispatch(updateAlertStatus(true));
      dispatch(updateAlertMessage('This product is already selected!'));
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
  isCompared: PropTypes.bool,
  id: PropTypes.string,
  category: PropTypes.string,
};

export default CompareBtn;
