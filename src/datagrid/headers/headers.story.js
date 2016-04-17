import React from 'react';
import {Headers} from './headers';
import {storiesOf} from '@kadira/storybook';

const headersData = [
  {label: 'Alpha'},
  {label: 'Bravo'},
  {label: 'Charlie'},
  {label: 'Delta'},
  {label: 'Echo'},
];

storiesOf('DataGrid component', module)
  .add('Headings with simple data', () => (
    <Headers headersData={headersData} />
  ));
