import './resets.styl';
import React from 'react';
import {render} from 'react-dom';
import {Examples} from './examples';

const appContainer = document.getElementById('app-container');

if (appContainer) {
  render(<Examples />, appContainer);
} else {
  /* eslint-disable no-console */
  console.warn('Unable to find application container');
  /* eslint-enable no-console */
}
