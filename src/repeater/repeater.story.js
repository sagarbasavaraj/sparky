import React from 'react';
import Repeater from './repeater';
import Radio from '../radio/radio';
import Checkbox from '../checkbox/checkbox';
import ListItem from '../ListItem/ListItem';
import {storiesOf, action} from '@kadira/storybook';

storiesOf('Repeater', module)
  .add('Simple <div /> repeater', () => (
    <Repeater parent={<div className="parent" />} item={<div className="child" />} >
      <item children="Hello" />
      <item children="World" />
    </Repeater>)
  )
  .add('Simple <Radio /> repeater', () => (
      <Repeater parent={<div className="parent" />}
        item={<Radio />}
      >
          <item name="gender" value="Male" onChange={action('radio changed')}>
          </item>
          <item name="gender" value="Female" onChange={action('radio changed')}>
          </item>
      </Repeater>
    )
  )
  .add('Simple <Checkbox /> repeater', () => (
      <Repeater parent={<div className="parent" />}
        item={<Checkbox />}
      >
          <item name="orange" value="Orange"
            onChange={action('Orange Checkbox')}
          >
          </item>
          <item name="apple" value="Apple"
            onChange={action('Apple Checkbox')}
          >
          </item>
          <item name="grapes" value="Grapes"
            onChange={action('Grapes Checkbox')}
          >
          </item>
          <item name="Bannana" value="Bannana"
            onChange={action('Bannana Checkbox')}
          >
          </item>
      </Repeater>
    )
  )
  .add('Simple <ListItem /> repeater', () => (
      <Repeater parent={<ul className="parent" />}
        item={<ListItem className="item" />}
      >
          <item children="List Item 1" />
          <item children="List Item 2" />
          <item children="List Item 3" />
          <item children="List Item 4" />
      </Repeater>
    )
  );
