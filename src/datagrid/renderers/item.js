/* @flow */
import React, {PropTypes} from 'react';

const Item = ({itemData}) => (
  <div className="datagrid item renderer">
    <span>{itemData.label}</span>
  </div>
);

Item.propTypes = {
  itemData: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export {Item};
