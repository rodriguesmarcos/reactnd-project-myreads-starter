import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BooksGrid from '../components/BooksGrid.js';
import books from './fixtures/books';
import shelves from './fixtures/shelves';

describe('<BooksGrid />', () => {

  const minProps = {
    books: [],
    shelves: shelves,
    onChangeShelf: () => {},
    loading: true,
  }

  test('renders without exploding', () => {
    const wrapper = shallow(<BooksGrid {...minProps}/>);
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should render Loading spinner', () => {
    const wrapper = shallow(<BooksGrid {...minProps}/>);
    expect(wrapper.find('FoldingCube').length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should render "No books message"', () => {
    const wrapper = shallow(<BooksGrid {...minProps} loading={false}/>);
    expect(wrapper.find('p').text()).toBe("There are no books");
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should render "No books message in shelf"', () => {
    const shelf = shelves[0];
    const wrapper = shallow(<BooksGrid {...minProps} loading={false} shelf={shelf}/>);
    expect(wrapper.find('p').text()).toBe(`There are no books in ${shelf.name} shelf`);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should render books', () => {
    const wrapper = shallow(<BooksGrid {...minProps} loading={false} books={books}/>);
    expect(wrapper.find('TransitionGroup').length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
