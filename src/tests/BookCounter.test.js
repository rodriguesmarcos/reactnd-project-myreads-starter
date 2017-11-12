import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BookCounter from '../components/BookCounter.js';

describe('<BookCounter />', () => {

  const minProps = {
    total: 10,
  }

  test('renders without exploding', () => {
    const wrapper = shallow(<BookCounter {...minProps}/>);
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should show total', () => {
    const wrapper = shallow(<BookCounter {...minProps} />);
    expect(wrapper.text()).toBe(`${minProps.total}`);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should show "s of t"', () => {
    const showing = 5;
    const wrapper = shallow(<BookCounter {...minProps} showing={showing} />);
    expect(wrapper.text()).toBe(`${showing} of ${minProps.total}`);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
