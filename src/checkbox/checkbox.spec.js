import React from 'react';
import Checkbox from './checkbox';
import {mount} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

describe('<Checkbox /> should', () => {
  it('exist', () => expect(Checkbox).to.be.defined);

  it('have attribute checked when selected', () => {
    const component = mount(<Checkbox checked />);
    expect(component.find('input[type="checkbox"]')).to.be.checked();
  });

  it('not have attribute checked when not selected', () => {
    const component = mount(<Checkbox />);
    expect(component.find('input[type="checkbox"]')).to.not.be.checked();
  });

  it('render value', () => {
    const component = mount(<Checkbox name="apple" value="apple" />);
    expect(component.text()).to.contain('apple');
  });
});
