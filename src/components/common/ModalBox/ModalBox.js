import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './ModalBox.module.scss';

const ModalBox = ({ title, description, onClose }) => {
  return ReactDOM.createPortal(
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>
          X
        </button>
        <h2>{title}</h2>
        <p>{description}</p>
        <button className={styles.modalButton} onClick={onClose}>
          I got acquainted
        </button>
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
