import React from 'react';
import { shallow } from 'enzyme';
import NewFurniture from './NewFurniture';

describe('Component NewFurniture', () => {
  const categories = [{ id: 'bed', name: 'Beds' }];
  const products = [
    {
      id: '1',
      name: 'Bed 1',
      category: 'bed',
      oldPrice: 150,
      price: 100,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: '2',
      name: 'Bed 2',
      category: 'bed',
      oldPrice: 250,
      price: 150,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: '3',
      name: 'Bed 3',
      category: 'bed',
      oldPrice: 100,
      price: 50,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: '4',
      name: 'Bed 4',
      category: 'bed',
      oldPrice: 120,
      price: 70,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: '5',
      name: 'Bed 5',
      category: 'bed',
      oldPrice: 80,
      price: 50,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
    },
  ];
  it('should render without crashing', () => {
    const component = shallow(<NewFurniture />);
    expect(component).toBeTruthy();
  });
});
