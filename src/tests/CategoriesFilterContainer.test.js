import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CategoriesFilterContainer from '../components/CategoriesFilterContainer.js';
import books from './fixtures/books';
import shelves from './fixtures/shelves';

describe('<CategoriesFilterContainer />', () => {

  const minProps = {
    books: books,
    currCat: '',
    onChangeCategory: () => {},
  }

  test('renders without exploding', () => {
    const wrapper = shallow(<CategoriesFilterContainer {...minProps}/>);
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
