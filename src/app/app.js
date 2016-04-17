import React from 'react';
// import {DataGrid} from '../datagrid';
import {Button} from '../button';

const App = () => (
  <div>
    <header>
      <h1 className="title">App!</h1>
    </header>
    {/* <DataGrid dataProvider={[]} /> */}
    <Button label="Button Yay" onClick={() => null} />
  </div>
);

export {App};
