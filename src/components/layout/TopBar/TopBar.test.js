import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { shallow } from 'enzyme';
import TopBar from './TopBar';

describe('TopBar', () => {
  it('renders without crashing', () => {
    shallow(
      <Provider store={store}>
        <TopBar />
      </Provider>
    );
  });
});
