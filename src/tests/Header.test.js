import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../components/Header.js';

describe('<Header />', () => {

  const minProps = {
    location: { pathname: "/" }
  }

  const notHome = {
    location: { pathname: "/search" }
  }

  test( 'renders without exploding', () => {
    const wrapper = shallow(<Header {...minProps}/>);
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test( 'renders back button', () => {
    const wrapper = shallow(<Header {...notHome}/>);
    expect(wrapper.find('Link').length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
