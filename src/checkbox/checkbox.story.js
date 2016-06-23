import React from 'react';
import {storiesOf, action} from '@kadira/storybook';

import Checkbox from './checkbox';

storiesOf('Checkbox', module)
  .add('with checked', () => (
    <Checkbox name="Apple" value="Apple" checked
      onChange={action('checkbox selected')}
    />
  ))
  .add('with unchecked', () => (
    <Checkbox name="Orange" value="Orange"
      onChange={action('checkbox selected')}
    />
  ));
