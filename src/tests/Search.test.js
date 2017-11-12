import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { addCategoryToUncategorized } from '../helpers';
import Search from '../components/Search.js';
import books from './fixtures/books';
import shelves from './fixtures/shelves';

describe('<Search />', () => {

  const minProps = {
    results: [],
    shelves: [],
    onChangeShelf: () => {},
    loading: false,
    orderBy: 'title',
    onOrderBy: () => {},
    categories: [],
    currCat: '',
    onChangeCategory: () => {},
    showing: [],
    onChangeQuery: () => {},
    query: '',
    onBulkMove: () => {},
    books: [],
  }

  test('renders without exploding', () => {
    const wrapper = shallow(<Search {...minProps} />);
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should render extra components', () => {
    const wrapper = shallow(<Search {...minProps} showing={books}/>);
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
