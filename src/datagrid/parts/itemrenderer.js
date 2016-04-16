/* @flow */
import React, {PropTypes} from 'react';

const ItemRenderer = ({label = ''}: Object) => (
  <div className="datagrid itemrenderer">
    <span>{label}</span>
  </div>
);

ItemRenderer.propTypes = {
  label: PropTypes.string.isRequired,
};

export {ItemRenderer};
