/* @flow */
import React, {Component, Element, PropTypes} from 'react';
import type {
  DataGridState,
  DataGridProps,
  DataGridDefaultProps,
} from './types';
const processColumnHeaders = (): Array<Element> => [
  <div key={1}>Header1</div>,
  <div key={2}>Header2</div>,
  <div key={3}>Header3</div>,
];

export class DataGrid extends Component<DataGridState, DataGridProps, DataGridDefaultProps> {
  static propTypes = {
    dataProvider: PropTypes.array.isRequired,
    children: PropTypes.arrayOf(PropTypes.element),
  };

  constructor(): void {
    super();
    this.state = {
      gridDataProvider: [],
    };
  }

  render(): Element {
    const {dataProvider, children} = this.props;
    // const columnHeaders = processColumnHeaders(children);

    if (dataProvider && children) {
      return <div>{processColumnHeaders()}</div>;
    }

    return <div>Invalid DataGrid</div>;
  }
}
