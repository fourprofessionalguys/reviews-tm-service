/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Header from '../client/components/Header';

const wrapper = shallow(<Header />);

describe('Should render', () => {
  it('should render without error', () => {
    expect(wrapper);
  });
});