import './resets.styl';
import React from 'react';
import {render} from 'react-dom';
import {Examples} from './examples';

render(
  <Examples />,
  document.getElementById('examples-container'),
);
