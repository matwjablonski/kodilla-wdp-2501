import React from 'react';
import { shallow, mount } from 'enzyme';
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
    action: addToCompareTest,
    isFavorite: false,
    isCompared: false,
  };
  it('should render without crashing', () => {
    const component = shallow(<ProductBox {...props} />);
    expect(component).toBeTruthy();
  });
  it('should add selected product to compare', () => {
    const component = mount(<ProductBox {...props} />);
    const buttons = component.find('[data-testid="compare-test"]');
    const button = buttons.at(1);
    button.simulate('click');

    expect(addToCompareTest).toHaveBeenCalledWith({
      id: '1',
      category: 'bed',
    });
    expect(addToCompareTest).toHaveBeenCalledTimes(1);
  });
});
