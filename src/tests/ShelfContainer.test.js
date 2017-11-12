import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { addCategoryToUncategorized } from '../helpers';
import ShelfContainer from '../components/ShelfContainer.js';
import books from './fixtures/books';
import shelves from './fixtures/shelves';

describe('<ShelfContainer />', () => {

  const minProps = {
    shelf: shelves[0],
    shelves: shelves,
    books: addCategoryToUncategorized(books),
    onChangeShelf: () => {},
    loading: false,
    onBulkMove: () => {},
  }

  test('renders without exploding', () => {
    const wrapper = shallow(<ShelfContainer {...minProps}/>);
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should set orderBy', () => {
    const value = "numPages";
    const wrapper = shallow(<ShelfContainer {...minProps}/>);
    const defaultOrderBy = wrapper.state('orderBy');
    wrapper.find('Shelf').prop('onOrderBy')(value);
    expect(wrapper.state('orderBy')).toBe(value);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should set current category', () => {
    const value = "computer";
    const wrapper = shallow(<ShelfContainer {...minProps}/>);
    expect(wrapper.state('currCat')).toBe('');
    wrapper.find('Shelf').prop('onChangeCategory')(value);
    expect(wrapper.state('currCat')).toBe(value);
  });

});
