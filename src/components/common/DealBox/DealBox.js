import React from 'react';
import PropTypes from 'prop-types';
import styles from './DealBox.module.scss';


const DealBox = ({ category, id }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className={`${styles.dealBox}`}>
          </div>
        </div>
      </div>
    </div>
  );
};

DealBox.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
};

export default DealBox;