import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './ModalBox.module.scss';

const ModalBox = ({ title, description, typeBtn, onClose }) => {
  return ReactDOM.createPortal(
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button type='button' className={styles.modalClose} onClick={onClose}>
          X
        </button>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <h2>{title}</h2>
          <div className={styles.description}>{description}</div>
          <button type={typeBtn} className={styles.modalButton} onClick={onClose}>
            {typeBtn === 'submit' ? 'Submit' : 'I got acquainted'}
          </button>
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
