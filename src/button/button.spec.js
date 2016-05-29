import React from 'react';
import {Button} from './button';
import {shallow} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

const noop = () => null;

describe('<Button /> should', () => {
  it('exist', () => expect(Button).to.be.defined);

  it('renders div', () => {
    const wrapper = shallow(<Button label="My Button" onClick={noop} />);
    expect(wrapper.find('div')).to.have.className('sparky button');
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
