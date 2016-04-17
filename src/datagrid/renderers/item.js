/* @flow */
import React, {PropTypes} from 'react';
import type {ItemProps} from './types';

const Item = ({itemData}: ItemProps): any => (
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
