import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BookShelfChanger from '../components/BookShelfChanger.js';
import books from './fixtures/books';
import shelves from './fixtures/shelves';

describe('<BookShelfChanger />', () => {

  const minProps = {
    book: books[0],
    shelves: shelves,
    onChangeShelf: () => {},
  }

  test('renders without exploding', () => {
    const wrapper = shallow(<BookShelfChanger {...minProps}/>);
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test('should call onChangeShelf', () => {
    const onChangeShelfSpy = jest.fn();
    const value = shelves[2].id;
    const wrapper = shallow(<BookShelfChanger {...minProps} onChangeShelf={onChangeShelfSpy}/>);
    const select = wrapper.find('select');
    select.simulate('change', {
      target: { value }
    });
    expect(onChangeShelfSpy).toHaveBeenLastCalledWith(books[0],value);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
