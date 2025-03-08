import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import Homepage from './Homepage';

describe('Homepage', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <Homepage />
      </Provider>
    );
  });
});
