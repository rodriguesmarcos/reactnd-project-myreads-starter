import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MyBooks from '../components/MyBooks.js';
import books from './fixtures/books';
import shelves from './fixtures/shelves';

describe('<MyBooks />', () => {

  const minProps = {
    shelves: shelves,
    books: books,
    onChangeShelf: () => {},
    loading: false,
    onBulkMove: () => {},
  }

  test('renders without exploding', () => {
    const wrapper = shallow(<MyBooks {...minProps}/>);
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should render 3 shelves', () => {
    const wrapper = shallow(<MyBooks {...minProps}/>);
    expect(wrapper.find('ShelfContainer').length).toBe(3);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
