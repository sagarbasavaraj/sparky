/* @flow */
import React, {Component, Element, PropTypes} from 'react';
// import {processColumnHeaders} from './dataprovider';
import Immutable from 'seamless-immutable';


export class DataGrid extends Component {
  static propTypes = {
    dataProvider: PropTypes.array.isRequired,
    children: PropTypes.arrayOf(PropTypes.element),
  };

  constructor() {
    super();
    this.state = {
      gridDataProvider: Immutable([]),
      columnsDataProviders: Immutable([]),
    };
  }

  render(): Element {
    const {dataProvider, children} = this.props;

    if (dataProvider && children) {
      return <div>Data Grid</div>;
    }

    return <div>Invalid DataGrid</div>;
  }
}
