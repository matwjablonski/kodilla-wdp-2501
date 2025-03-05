import React from 'react';
import { shallow } from 'enzyme';
import CompareBarItem from './CompareBarItem';
import Button from '../../common/Button/Button';

describe('Component CompareBarItem', () => {
  const removeActionTest = jest.fn();
  const props = {
    id: '1',
    category: 'bed',
    action: removeActionTest,
  };
  it('should render without crashing', () => {
    const component = shallow(<CompareBarItem {...props} />);
    const img = component.find('img');
    expect(img.prop('src')).toBe(
      `${process.env.PUBLIC_URL}/images/products/bed/bed-1.jpg`
    );
    expect(component).toBeTruthy();
  });
  it('should call action when button is clicked', () => {
    const wrapper = shallow(<CompareBarItem {...props} />);
    const button = wrapper.find(Button);
    button.simulate('click', { preventDefault: () => {} });
    expect(removeActionTest).toHaveBeenCalledWith('1');
  });
});
