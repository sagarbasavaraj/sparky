import React from 'react';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';

import Environment from './environment';

chai.use(chaiEnzyme());

describe('<Environment /> should', () => {
  it('exist', () => expect(Environment).to.be.defined);

  it('renders div', () => {
    const wrapper = shallow(<Environment />);
    expect(wrapper.find('footer')).to.have.className('environment box');
  });
});
