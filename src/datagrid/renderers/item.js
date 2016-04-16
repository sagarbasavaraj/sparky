/* @flow */
import React, {Element, PropTypes} from 'react';

type ItemLabel = string;

type ItemData = {
  label: ItemLabel
};

type ItemProps = {
  itemData: ItemData,
};

const Item = ({itemData: {label}}: ItemProps): Element => (
  <div className="datagrid item renderer">
    <span>{label}</span>
  </div>
);

Item.propTypes = {
  itemData: PropTypes.shape({
    label: PropTypes.oneOf([
      PropTypes.object,
      PropTypes.string,
      PropTypes.func,
    ]).isRequired,
  }).isRequired,
};

export {Item};
