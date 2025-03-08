import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './ModalBox.module.scss';

const ModalBox = ({ title, description, typeBtn='button', onClose, action }) => {
  return ReactDOM.createPortal(
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button type='button' className={styles.modalClose} onClick={onClose}>
          X
        </button>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h2>{title}</h2>
          <div className={styles.description}>{description}</div>
          {typeBtn === 'button' && (
            <button className={styles.modalButton} onClick={onClose}>
              I got acquainted
            </button>
          )}
          {typeBtn === 'submit' && (
            <button className={styles.modalButton} onClick={action}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

ModalBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalBox;
