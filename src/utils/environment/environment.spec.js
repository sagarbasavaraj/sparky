import React from 'react';
import {shallow} from 'enzyme';
import 'sinon';
import chai, {expect} from 'chai';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';

import Environment from './environment';

chai.use(sinonChai);
chai.use(chaiEnzyme());

const noop = () => null;

describe('<Button /> should', () => {
  it('exist', () => expect(Environment).to.be.defined);

  it('renders div', () => {
    const wrapper = shallow(<Environment />);
    expect(wrapper.find('footer')).to.have.className('environment box');
  });
  
  it('renders span', () => {
    const wrapper = shallow(<Environment />);
    expect(wrapper.find('span')).to.have.className('environment version');
  });
});

describe('Toggle <Button /> should', () => {
  it('not have toggle specific class when not toggled.', () => {
    const wrapper = shallow(<Button label="My Button" onClick={noop} />);
    expect(wrapper.find('div')).not.to.have.className('toggled');
  });

  it('have toggle specific class when toggled.', () => {
    const wrapper = shallow(<Button label="My Button" toggle toggled onClick={noop} />);
    expect(wrapper.find('div')).to.have.className('toggled');
  });
});
