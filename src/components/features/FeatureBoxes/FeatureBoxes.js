import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import styles from './FeatureBoxes.module.scss';
import FeatureBox from '../../common/FeatureBox/FeatureBox';

const FeatureBoxes = () => {
  const [activeBox, setActiveBox] = useState(null);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div
            className='col-6 col-lg-3 my-3 my-lg-0'
            onMouseEnter={() => setActiveBox('faTruck')}
            onMouseLeave={() => setActiveBox(null)}
          >
            <Link to='/' className='text-decoration-none'>
              <FeatureBox icon={faTruck} active={activeBox === 'faTruck'}>
                <h5>Free shipping</h5>
                <p>All orders</p>
              </FeatureBox>
            </Link>
          </div>
          <div
            className='col-6 col-lg-3 my-3 my-lg-0'
            onMouseEnter={() => setActiveBox('faHeadphones')}
            onMouseLeave={() => setActiveBox(null)}
          >
            <Link to='/' className='text-decoration-none'>
              <FeatureBox icon={faHeadphones} active={activeBox === 'faHeadphones'}>
                <h5>24/7 customer</h5>
                <p>support</p>
              </FeatureBox>
            </Link>
          </div>
          <div
            className='col-6 col-lg-3 my-3 my-lg-0'
            onMouseEnter={() => setActiveBox('faReplyAll')}
            onMouseLeave={() => setActiveBox(null)}
          >
            <Link to='/' className='text-decoration-none'>
              <FeatureBox
                icon={faReplyAll}
                link={Link}
                active={activeBox === 'faReplyAll'}
              >
                <h5>Money back</h5>
                <p>guarantee</p>
              </FeatureBox>
            </Link>
          </div>
          <div
            className='col-6 col-lg-3 my-3 my-lg-0'
            onMouseEnter={() => setActiveBox('faBullhorn')}
            onMouseLeave={() => setActiveBox(null)}
          >
            <Link to='/' className='text-decoration-none'>
              <FeatureBox icon={faBullhorn} active={activeBox === 'faBullhorn'}>
                <h5>Member discount</h5>
                <p>First order</p>
              </FeatureBox>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
