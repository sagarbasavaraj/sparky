/* @flow */
import React from 'react';
// import {DataGrid} from '../datagrid';
import {
  Header,
  Item,
} from '../datagrid/renderers';

// const simpleDataProvider = [
//   {name: 'Alice', age: 31, country: 'USA'},
//   {name: 'Beatrice', age: 32, country: 'UK'},
//   {name: 'Clara', age: 33, country: 'UAE'},
//   {name: 'Dianna', age: 34, country: 'Urugway'},
//   {name: 'Elisa', age: 35, country: 'Uganda'},
// ];

const headerDataAlpha = {label: 'Header Alpha'};
const itemDataAlpha = {label: 'Item Alpha'};
const itemDataBravo = {label: 'Item Bravo'};

export const Examples = (): Object => (
  <div>

    <div className="example item">
      <header>
        <h2 className="title">Default Header Renderer Example</h2>
      </header>
      <aside>
        <p>Documentation and explanation!</p>
      </aside>
      <article>
        <Header headerData={headerDataAlpha} />
      </article>
    </div>
    <div className="example item">
      <header>
        <h2 className="title">Default Item Renderer Example</h2>
      </header>
      <aside>
        <p>Documentation and explanation!</p>
      </aside>
      <article>
        <Item itemData={itemDataAlpha} />
        <Item itemData={itemDataBravo} />
      </article>
    </div>
  </div>
);

/*
<div className="example item">
  <header>
    <h2 className="title">Simple Data Grid Example!</h2>
  </header>
  <aside>
    <p>Documentation and explanation!</p>
  </aside>
  <article>
    <DataGrid dataProvider={simpleDataProvider}>
      <column
        label="Name"
        field="name"
        sortable
      />
      <column
        label="Age"
        field="age"
        sortable
      />
      <column
        label="Country"
        field="country"
        sortable
      />
    </DataGrid>
  </article>
</div>
*/
