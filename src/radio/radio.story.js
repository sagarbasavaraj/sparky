import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import Radio from './radio';

storiesOf('Radio', module)
  .add('with checked', () => (
    <Radio name="gender" value="Male" checked
      onChange={action('Male selected')}
    />
  ))
  .add('with unchecked', () => (
    <Radio name="gender" value="Female"
      onChange={action('Female selected')}
    />
  ));
