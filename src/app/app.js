import React from 'react';
import {Button} from '../button';
import {Environment} from '../utils';

const App = () => (
  <div>
    <header>
      <h1 className="title">App!</h1>
    </header>
    {/* <DataGrid dataProvider={[]} /> */}
    <Button label="Button Yay" onClick={() => null} />
    <Environment />
  </div>
);

export {App};
