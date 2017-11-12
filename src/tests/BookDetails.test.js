import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BookDetails from '../components/BookDetails.js';
import books from './fixtures/books';

describe('<BookDetails />', () => {

  const minProps = {
    match: { params: { bookId: books[0].id }},
    getViewableBook: () => (books[0]),
    onChangeShelf: () => {},
  }

  test('renders without exploding', () => {
    const wrapper = shallow(<BookDetails {...minProps}/>);
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
