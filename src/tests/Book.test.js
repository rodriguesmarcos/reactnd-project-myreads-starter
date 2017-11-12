import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Book from '../components/Book.js';
import shelves from './fixtures/shelves';
import books from './fixtures/books';

describe('<Book />', () => {

  const props = {
    book: books[0],
    shelves,
    onChangeShelf: jest.fn(),
  }

  test('renders without exploding', () => {
    const wrapper = shallow(<Book {...props}/>);
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test( 'should have a checkbox', () => {
    const wrapper = shallow(<Book {...props}/>);
    const checkbox = wrapper.find('input[type="checkbox"]');
    expect(checkbox.length).toBe(1);
    expect(checkbox.prop('value')).toBe(`${books[0].id}`);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test( 'should have a Link to BookDetails', () => {
    const wrapper = shallow(<Book {...props}/>);
    const checkbox = wrapper.find('Link');
    expect(checkbox.length).toBe(1);
    expect(checkbox.prop('to')).toBe(`/book/${books[0].id}`);
    expect(toJson(wrapper)).toMatchSnapshot();
  });


});
