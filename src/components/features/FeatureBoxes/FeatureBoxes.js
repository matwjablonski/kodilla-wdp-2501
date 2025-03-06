import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';
import ReactDOM from 'react-dom';
import FeatureBox from '../../common/FeatureBox/FeatureBox';
import styles from './FeatureBoxes.module.scss';

const Modal = ({ title, description, onClose }) => {
  return ReactDOM.createPortal(
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>
          X
        </button>
        <h2>{title}</h2>
        <p>{description}</p>
        <button className={styles.modalButton} onClick={onClose}>
          Zapoznałem się
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

const FeatureBoxes = () => {
  const [activeBox, setActiveBox] = useState(null);
  const [modalData, setModalData] = useState(null);

  // Mapowanie benefitów na dane do modala
  const modalInfo = {
    faTruck: {
      title: 'Free shipping',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut metus vel ex vestibulum efficitur.',
    },
    faHeadphones: {
      title: '24/7 Customer Support',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod ligula sit amet sapien feugiat, a hendrerit metus gravida.',
    },
    faReplyAll: {
      title: 'Money back guarantee',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Nulla facilisi.',
    },
    faBullhorn: {
      title: 'Member Discount',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  };

  const openModal = benefitKey => {
    setModalData(modalInfo[benefitKey]);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='row'>
              <div
                className='col-6 col-lg-6 my-3 my-lg-0'
                onMouseEnter={() => setActiveBox('faTruck')}
                onMouseLeave={() => setActiveBox(null)}
                onClick={() => openModal('faTruck')}
              >
                <div className='text-decoration-none'>
                  <FeatureBox icon={faTruck} active={activeBox === 'faTruck'}>
                    <h5>Free shipping</h5>
                    <p>All orders</p>
                  </FeatureBox>
                </div>
              </div>
              <div
                className='col-6 col-lg-6 my-3 my-lg-0'
                onMouseEnter={() => setActiveBox('faHeadphones')}
                onMouseLeave={() => setActiveBox(null)}
                onClick={() => openModal('faHeadphones')}
              >
                <div className='text-decoration-none'>
                  <FeatureBox icon={faHeadphones} active={activeBox === 'faHeadphones'}>
                    <h5>24/7 customer</h5>
                    <p>support</p>
                  </FeatureBox>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='row'>
              <div
                className='col-6 col-lg-6 my-3 my-lg-0'
                onMouseEnter={() => setActiveBox('faReplyAll')}
                onMouseLeave={() => setActiveBox(null)}
                onClick={() => openModal('faReplyAll')}
              >
                <div className='text-decoration-none'>
                  <FeatureBox icon={faReplyAll} active={activeBox === 'faReplyAll'}>
                    <h5>Money back</h5>
                    <p>guarantee</p>
                  </FeatureBox>
                </div>
              </div>
              <div
                className='col-6 col-lg-6 my-3 my-lg-0'
                onMouseEnter={() => setActiveBox('faBullhorn')}
                onMouseLeave={() => setActiveBox(null)}
                onClick={() => openModal('faBullhorn')}
              >
                <div className='text-decoration-none'>
                  <FeatureBox icon={faBullhorn} active={activeBox === 'faBullhorn'}>
                    <h5>Member discount</h5>
                    <p>First order</p>
                  </FeatureBox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalData && (
        <Modal
          title={modalData.title}
          description={modalData.description}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
