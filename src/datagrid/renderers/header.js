/* @flow */
import React, {PropTypes} from 'react';

const Header = ({headerData}) => (
  <div className="datagrid column header">
    <span>{headerData.label}</span>
  </div>
);

Header.propTypes = {
  headerData: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }),
};

export {Header};
