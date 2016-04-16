/* @flow */
import React, {Element, PropTypes} from 'react';

// type HeaderLabel = string;
//
// type HeaderData = {
//   label: HeaderLabel,
// };

const Header = ({headerData: {label}}: Object): Element => (
  <div className="datagrid column header">
    <span>{label}</span>
  </div>
);

Header.propTypes = {
  headerData: PropTypes.shape({
    label: PropTypes.oneOf([
      PropTypes.object,
      PropTypes.string,
      PropTypes.func,
    ]).isRequired,
  }).isRequired,
};

export {Header};
