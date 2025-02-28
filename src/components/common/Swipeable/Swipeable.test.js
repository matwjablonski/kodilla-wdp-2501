import React from 'react';
import { shallow } from 'enzyme';
import Swipeable from './Swipeable';

describe('Component Swipeable', () => {
  const swipeLeftTest = jest.fn();
  const swipeRightTest = jest.fn();

  it('should call swipeLeft method when swiped to the left', () => {
    const component = shallow(
      <Swipeable swipeLeft={swipeLeftTest} swipeRight={swipeRightTest}>
        <div>Test element</div>
      </Swipeable>
    );
    component.simulate('touchstart', { touches: [{ clientX: 0 }] });
    component.simulate('touchmove', { touches: [{ clientX: -80 }] });
    component.simulate('touchend');
    expect(swipeLeftTest).toHaveBeenCalledTimes(1);
    expect(swipeRightTest).not.toHaveBeenCalled();
  });

  it('should call swipeRight method when swiped to the right', () => {
    const component = shallow(
      <Swipeable swipeLeft={swipeLeftTest} swipeRight={swipeRightTest}>
        <div>Test element</div>
      </Swipeable>
    );
    component.simulate('touchstart', { touches: [{ clientX: 0 }] });
    component.simulate('touchmove', { touches: [{ clientX: 80 }] });
    component.simulate('touchend');
    expect(swipeRightTest).toHaveBeenCalledTimes(1);
    expect(swipeLeftTest).not.toHaveBeenCalled();
  });
});
