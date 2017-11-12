import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Shelf from '../components/Shelf.js';
import books from './fixtures/books';
import shelves from './fixtures/shelves';

describe('<Shelf />', () => {

  const minProps = {
    books: books,
    onChangeCategory: () => {},
    shelf: shelves[0],
    shelves: shelves,
    onChangeShelf: () => {},
    loading: false,
    orderBy: '',
    onOrderBy: () => {},
    categories: [],
    currCat: '',
    showing: [],
    onBulkMove: () => {},
  }

  test('renders without exploding', () => {
    const wrapper = shallow(<Shelf {...minProps}/>);
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
