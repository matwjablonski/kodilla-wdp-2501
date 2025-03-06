import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './CompareBar.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  getAlertStatus,
  getAlertMessage,
  updateAlertMessage,
  updateAlertStatus,
} from '../../../redux/alertReducer';
import CompareBarItem from '../CompareBarItem/CompareBarItem';
import Button from '../../common/Button/Button';

const CompareBar = ({ productsSelected }) => {
  const dispatch = useDispatch();
  const alertStatus = useSelector(getAlertStatus);
  const alertMessage = useSelector(getAlertMessage);

  return (
    <div
      className={clsx(
        styles.compareBar,
        'row d-flex flex-md-column flex-lg-row justify-content-center align-items-center pl-3 py-4'
      )}
    >
      {alertStatus && (
        <div className='alert alert-warning alert-dismissible fade show' role='alert'>
          {alertMessage}
          <button
            type='button'
            className='close'
            data-dismiss='alert'
            aria-label='Close'
            onClick={() => {
              dispatch(updateAlertStatus(false));
              dispatch(updateAlertMessage(''));
            }}
          >
            <span>&times;</span>
          </button>
        </div>
      )}
      <div className='col-12 col-md-10 d-flex flex-row mx-auto'>
        {productsSelected.map(product => (
          <CompareBarItem key={product.id} {...product} />
        ))}
      </div>
      <div className='col-2 py-2'>
        <Button className={styles.compareBtn} variant='outline'>
          Compare
        </Button>
      </div>
    </div>
  );
};

CompareBar.propTypes = {
  productsSelected: PropTypes.array,
  id: PropTypes.string,
  category: PropTypes.string,
};

export default CompareBar;
