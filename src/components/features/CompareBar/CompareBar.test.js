import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
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
      <Provider store={store}>
        <CompareBar productsSelected={products} />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
