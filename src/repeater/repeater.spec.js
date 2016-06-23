import React from 'react';
import Checkbox from '../checkbox/checkbox';
import Radio from '../radio/radio';
import ListItem from '../ListItem/ListItem';
import Repeater from './repeater';
import {mount} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

describe('<Repeater /> should', () => {
  it('exist', () => expect(Repeater).to.be.defined);

  it('render the radio component', () => {
    const component = mount(
        <Repeater parent={<div className="parent" />}
          item={<Radio />}
        >
          <item name="gender" value="Male">
          </item>
          <item name="gender" value="Female">
          </item>
      </Repeater>
      );
    expect(component.find('input[type="radio"]')).to.have.length(2);
  });

  it('render the checkbox component', () => {
    const component = mount(
        <Repeater parent={<div className="parent" />} item={<Checkbox />}>
          <item name="orange" value="Orange">
          </item>
          <item name="apple" value="Apple">
          </item>
      </Repeater>
      );
    expect(component.find('input[type="checkbox"]')).to.have.length(2);
  });

  it('render the checkbox component', () => {
    const component = mount(
        <Repeater parent={<div className="parent" />} item={<Checkbox />}>
          <item name="orange" value="Orange">
          </item>
          <item name="apple" value="Apple">
          </item>
      </Repeater>
      );
    expect(component.find('input[type="checkbox"]')).to.have.length(2);
  });

  it('render the li component', () => {
    const component = mount(
        <Repeater parent={<ul className="parent" />} item={<ListItem />}>
          <item children="List Item 1" />
          <item children="List Item 2" />
          <item children="List Item 3" />
          <item children="List Item 4" />
        </Repeater>
      );
    expect(component.find('li')).to.have.length(4);
  });
});
