import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import OrderBy from '../components/OrderBy.js';
import books from './fixtures/books';
import shelves from './fixtures/shelves';

describe('<OrderBy />', () => {

  const minProps = {
    orderBy: 'title',
    onOrderBy: () => {},
  }

  test('renders without exploding', () => {
    const wrapper = shallow(<OrderBy {...minProps}/>);
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should call onOrderBy', () => {
    const onOrderBySpy = jest.fn();
    const value = 'numPages';
    const wrapper = shallow(<OrderBy {...minProps} onOrderBy={onOrderBySpy}/>);
    wrapper.find('select').simulate('change', {
      target: { value }
    });
    expect(onOrderBySpy).toHaveBeenCalledWith(value);
  });

});
