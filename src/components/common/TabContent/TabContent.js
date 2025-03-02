import React from 'react';
import PropTypes from 'prop-types';

const TabContent = ({ id, activeTab, children }) => {
  return (
    <div
      role='tabpanel'
      className={`tab-pane ${activeTab === id ? 'active' : ''}`}
      id={id}
    >
      {children}
    </div>
  );
};

TabContent.propTypes = {
  id: PropTypes.string,
  activeTab: PropTypes.string,
  children: PropTypes.node,
};

export default TabContent;
