import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { addCategoryToUncategorized } from '../helpers';
import SearchContainer from '../components/SearchContainer.js';
import books from './fixtures/books';
import shelves from './fixtures/shelves';

describe('<SearchContainer />', () => {

  const minProps = {
    books: addCategoryToUncategorized(books),
    shelves: shelves,
    onChangeShelf: () => {},
    onBulkMove: () => {},
    updateTempViewableBooks: () => {},
  }

  test('renders without exploding', () => {
    const wrapper = shallow(<SearchContainer {...minProps}/>);
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should set orderBy', () => {
    const value = "numPages";
    const wrapper = shallow(<SearchContainer {...minProps}/>);
    const defaultOrderBy = wrapper.state('orderBy');
    wrapper.find('Search').prop('onOrderBy')(value);
    expect(wrapper.state('orderBy')).toBe(value);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should set current category', () => {
    const value = "computer";
    const wrapper = shallow(<SearchContainer {...minProps}/>);
    expect(wrapper.state('currCat')).toBe('');
    wrapper.find('Search').prop('onChangeCategory')(value);
    expect(wrapper.state('currCat')).toBe(value);
  });

  test('should set query', () => {
    const value = "react";
    const wrapper = shallow(<SearchContainer {...minProps}/>);
    expect(wrapper.state('query')).toBe('');
    wrapper.find('Search').prop('onChangeQuery')(value);
    expect(wrapper.state('query')).toBe(value);
  });

});
