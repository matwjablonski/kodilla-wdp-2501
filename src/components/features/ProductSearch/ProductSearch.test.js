import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { shallow } from 'enzyme';
import ProductSearch from './ProductSearch';

describe('Component ProductSearch', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <ProductSearch />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
