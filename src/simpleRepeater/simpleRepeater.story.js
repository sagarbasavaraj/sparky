import React from 'react';
import SimpleRepeater from './SimpleRepeater';
import ListItem from '../ListItem/ListItem';
import Radio from '../radio/radio';
import {storiesOf} from '@kadira/storybook';

storiesOf('SimpleRepeater', module)
  .add('Simple <div /> repeater', () => (
    <SimpleRepeater
      data={['eqewr', 'werwerwe', 'wrwerwerwe']}
      parent={<ul className="parent" />}
      child={<ListItem />}
    />
    )
  ).add('Simple <Radio /> repeater', () => (
    <SimpleRepeater
      data={[{name: 'gender', value: 'Male'}, {name: 'gender', value: 'Female'}]}
      parent={<div className="parent" />}
      child={<Radio />}
    />
    )
  );
