import React from 'react';
import { shallow } from 'enzyme';
import ProductBox from './ProductBox';

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <ProductBox name='Test Product' price={30} oldPrice={40} promo='Sale' stars={4} />
    );
    expect(component).toBeTruthy();
  });
});
