/* @flow */
import React, {Component, Element, PropTypes} from 'react';
import type {DataGridState, DataGridProps} from './types';

export class DataGrid extends Component<void, DataGridProps, DataGridState> {
  static propTypes = {
    dataProvider: PropTypes.array.isRequired,
    children: PropTypes.arrayOf(PropTypes.element),
  };

  constructor(): void {
    super();
    this.state = {gridDataProvider: []};
  }

  render(): Element {
    const {dataProvider, children} = this.props;

    if (dataProvider && children) {
      return <div>DataProvider and Children</div>;
    } else if (dataProvider) {
      return <div>DataProvider only</div>;
    }

    return <div>Invalid DataGrid</div>;
  }
}
