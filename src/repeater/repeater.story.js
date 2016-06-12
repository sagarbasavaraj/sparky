// import React, {Component} from 'react';
// import {Button} from './button';
import React from 'react';
import Repeater from './repeater';
import {storiesOf} from '@kadira/storybook';

storiesOf('Repeater', module)
  .add('Simpe <div /> repeater', () => (
    <Repeater parent={<div className="parent" />} item={<div className="child" />} >
      <item children="Hello" />
      <item children="World" />
    </Repeater>
  ));
