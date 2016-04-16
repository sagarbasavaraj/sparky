/* @flow */
import React from 'react';
import {DataGrid} from '../datagrid';

const simpleDataProvider = [
  {name: 'Alice', age: 31, country: 'USA'},
  {name: 'Beatrice', age: 32, country: 'UK'},
  {name: 'Clara', age: 33, country: 'UAE'},
  {name: 'Dianna', age: 34, country: 'Urugway'},
  {name: 'Elisa', age: 35, country: 'Uganda'},
];

export const Examples = () => (
  <div>
    <div className="example item">
      <header>
        <h1 className="title">Simple Data Grid Example!</h1>
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
  </div>
);
