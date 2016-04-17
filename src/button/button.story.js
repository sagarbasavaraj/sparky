import React from 'react';
import {Button} from './button';
import {storiesOf, action} from '@kadira/storybook';

storiesOf('Button', module)
  .add('Button with label only', () => (
    <Button label="Label Only" onClick={action('Button Clicked!')} />
  ))
  .add('Button with label and icon', () => (
    <Button label="Label & Icon" onClick={action('Button Clicked!')} />
  ));
