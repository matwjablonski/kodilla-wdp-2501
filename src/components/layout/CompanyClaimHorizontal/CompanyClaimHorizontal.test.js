import React from 'react';
import { shallow } from 'enzyme';
import CompanyClaimHorizontal from './CompanyClaimHorizontal';

describe('CompanyClaim', () => {
  it('renders without crashing', () => {
    shallow(<CompanyClaimHorizontal />);
  });
});
