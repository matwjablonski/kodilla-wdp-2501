import React from 'react';
import { shallow } from 'enzyme';
import CompareBar from './CompareBar';

describe('Component CompareBar', () => {
  const products = [
    {
      id: '1',
      category: 'bed',
    },
  ];
  it('should render without crashing', () => {
    const component = shallow(
      <CompareBar
        showAlert={false}
        messageAlert=''
        productsSelected={products}
        setShowAlert={() => {}}
        action={() => {}}
      />
    );
    expect(component).toBeTruthy();
  });
  it('should show alert when showAlert is true', () => {
    const component = shallow(
      <CompareBar
        showAlert={true}
        messageAlert='Alert!'
        productsSelected={products}
        setShowAlert={() => {}}
        action={() => {}}
      />
    );
    expect(component.find('.alert').text()).toContain('Alert!');
  });
});
