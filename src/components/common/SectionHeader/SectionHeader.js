import React from 'react';
import styles from './SectionHeader.module.scss';
import PropTypes from 'prop-types';

const SectionHeader = ({ children }) => {
  return (
    <div className={'col-auto ' + styles.heading}>
      <h3>{children}</h3>
    </div>
  );
};

SectionHeader.propTypes = {
  children: PropTypes.node,
};

export default SectionHeader;
