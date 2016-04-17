/* @flow */
import './header.styl';
import React, {PropTypes} from 'react';
import type {HeaderProps} from './types';

const Header = ({headerData}: HeaderProps): any => (
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
