import React from 'react';
import { shallow } from 'enzyme';
import StarRating from './StarRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

describe('StarRating', () => {
  const props = {
    stars: 3,
  };
  it('should render without crashing', () => {
    const component = shallow(<StarRating {...props} />);
    expect(component).toBeTruthy();
    const stars = component.find(FontAwesomeIcon);
    expect(stars).toHaveLength(5);
  });
  it('should set new rating after clicked on star', () => {
    const component = shallow(<StarRating {...props} />);
    component
      .find('a')
      .at(3)
      .simulate('click', { preventDefault: () => {} });
    const stars = component.find(FontAwesomeIcon);
    expect(stars.at(0).prop('className')).toBe('setRating');
    expect(stars.at(1).prop('className')).toBe('setRating');
    expect(stars.at(2).prop('className')).toBe('setRating');
    expect(stars.at(3).prop('className')).toBe('setRating');
    expect(stars.at(4).prop('className')).not.toBe('setRating');
  });
  it('should change proper stars when are on hover', () => {
    const component = shallow(<StarRating {...props} />);
    component
      .find('a')
      .at(2)
      .simulate('mouseEnter');
    const stars = component.find(FontAwesomeIcon);
    expect(stars.at(0).prop('className')).toBe('setRating');
    expect(stars.at(1).prop('className')).toBe('setRating');
    expect(stars.at(2).prop('className')).toBe('setRating');
    expect(stars.at(3).prop('className')).not.toBe('setRating');
  });
  it('should change star to previous state when star is not on hover', () => {
    const component = shallow(<StarRating {...props} />);
    component
      .find('a')
      .at(0)
      .simulate('mouseEnter');
    let hoveredStar = component
      .find(FontAwesomeIcon)
      .at(0)
      .prop('className');
    expect(hoveredStar).toBe('setRating');
    component
      .find('a')
      .at(0)
      .simulate('mouseLeave');
    hoveredStar = component
      .find(FontAwesomeIcon)
      .at(0)
      .prop('className');
    expect(hoveredStar).not.toBe('setRating');
  });
  it('should set myRating on default value when myRating is specified in props', () => {
    const component = shallow(<StarRating {...props} myRating={4} />);
    const stars = component.find(FontAwesomeIcon);
    expect(stars.at(0).prop('className')).toBe('setRating');
    expect(stars.at(1).prop('className')).toBe('setRating');
    expect(stars.at(2).prop('className')).toBe('setRating');
    expect(stars.at(3).prop('className')).toBe('setRating');
    expect(stars.at(4).prop('className')).not.toBe('setRating');
  });
});
