import React from 'react';
import {Header} from './header';
import {storiesOf} from '@kadira/storybook';

const headerDataAlpha = {label: 'Header Alpha'};
const headerDataBravo = {label: 'Header Bravo'};

storiesOf('DataGrid', module)
  .add('Simple header renderer with alpha text', () => (
    <Header headerData={headerDataAlpha} />
  ))
  .add('Simple header renderer with bravo text', () => (
    <Header headerData={headerDataBravo} />
  ));
