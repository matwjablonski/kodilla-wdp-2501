import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './CompareBar.module.scss';
import CompareBarItem from '../CompareBarItem/CompareBarItem';
import Button from '../../common/Button/Button';

const CompareBar = ({
  showAlert,
  messageAlert,
  productsSelected,
  setShowAlert,
  action,
}) => {
  return (
    <div
      className={clsx(
        styles.compareBar,
        'row d-flex flex-md-column flex-lg-row justify-content-center align-items-center pl-3 py-4'
      )}
    >
      {showAlert && (
        <div className='alert alert-warning alert-dismissible fade show' role='alert'>
          {messageAlert}
          <button
            type='button'
            className='close'
            data-dismiss='alert'
            aria-label='Close'
            onClick={() => setShowAlert(false)}
          >
            <span>&times;</span>
          </button>
        </div>
      )}
      <div className='col-12 col-md-10 d-flex flex-row mx-auto'>
        {productsSelected.map(product => (
          <CompareBarItem key={product.id} action={action} {...product} />
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
  setShowAlert: PropTypes.func,
  showAlert: PropTypes.bool,
  messageAlert: PropTypes.string,
  action: PropTypes.func,
};

export default CompareBar;
