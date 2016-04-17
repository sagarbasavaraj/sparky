import React from 'react';
import {Header} from './header';
import {storiesOf} from '@kadira/storybook';

const headerDataAlpha = {label: 'Header Alpha'};
const headerDataBravo = {label: 'Header Bravo'};

storiesOf('Header renderer', module)
  .add('Simple header with alpha text', () => (
    <Header headerData={headerDataAlpha} />
  ))
  .add('Simple header with bravo text', () => (
    <Header headerData={headerDataBravo} />
  ));
