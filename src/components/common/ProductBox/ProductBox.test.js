import React from 'react';
import { shallow } from 'enzyme';
import ProductBox from './ProductBox';

describe('Component ProductBox', () => {
  const addToCompareTest = jest.fn();
  const props = {
    id: '1',
    category: 'bed',
    name: 'Bed 1',
    price: 30,
    oldPrice: 40,
    promo: 'sale',
    stars: 4,
    isFavorite: false,
    isCompared: false,
  };
  it('should render without crashing', () => {
    const component = shallow(<ProductBox {...props} />);
    expect(component).toBeTruthy();
  });
});
