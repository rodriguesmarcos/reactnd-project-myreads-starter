import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BulkMove from '../components/BulkMove.js';
import books from './fixtures/books';
import shelves from './fixtures/shelves';

describe('<BulkMove />', () => {

  const minProps = {
    books: books,
    shelves: shelves,
    showing: [],
    onBulkMove: () => {},
  }

  test('renders without exploding', () => {
    const wrapper = shallow(<BulkMove {...minProps}><div></div></BulkMove>);
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should render children', () => {
    const wrapper = shallow(<BulkMove {...minProps}><div></div></BulkMove>);
    expect(wrapper.find('div').length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should render children', () => {
    const wrapper = shallow(<BulkMove {...minProps} showing={books}><div></div></BulkMove>);
    expect(wrapper.find('form').length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should call onBulkMove', () => {
    const onBulkMoveSpy = jest.fn();
    const value = shelves[0].id;
    const wrapper = shallow(<BulkMove {...minProps} showing={books} onBulkMove={onBulkMoveSpy}><div></div></BulkMove>);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(onBulkMoveSpy).toHaveBeenCalledWith([], undefined);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
