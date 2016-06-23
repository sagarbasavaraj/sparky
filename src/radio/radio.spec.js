import React from 'react';
import Radio from './radio';
import {mount} from 'enzyme';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
//import sinon from 'sinon';

chai.use(chaiEnzyme());

describe('<Radio /> should', () => {
  it('exist', () => expect(Radio).to.be.defined);

  it('have attribute checked when selected', () => {
    const component = mount(<Radio name="gender" value="Male" checked />);
    expect(component.find('input[type="radio"]')).to.be.checked();
  });

  it('not have attribute checked when not selected', () => {
    const component = mount(<Radio />);
    expect(component.find('input[type="radio"]')).to.not.be.checked();
  });

  it('render value', () => {
    const component = mount(<Radio name="gender" value="Male" />);
    expect(component.text()).to.contain('Male');
  });

  // it('simulate onChange event', () => {
  //   const onChange = sinon.spy();
  //   const component = mount(<Radio onChange={onChange}/>);
  //   component.find('input[type="radio"]').simulate('onChange');
  //   expect(onChange.calledOnce).to.equal(true);
  // });
});
