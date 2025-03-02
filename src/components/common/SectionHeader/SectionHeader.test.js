import React from 'react';
import { shallow } from 'enzyme';
import SectionHeader from './SectionHeader';

describe('Component SectionHeader', () => {
  it('should render without crashing', () => {
    const component = shallow(<SectionHeader>Title</SectionHeader>);
    const textTitle = component.find('h3').text();
    expect(component).toBeTruthy();
    expect(textTitle).toBe('Title');
  });
});
