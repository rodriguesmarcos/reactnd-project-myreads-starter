import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CategoriesFilter from '../components/CategoriesFilter.js';
import books from './fixtures/books';
import shelves from './fixtures/shelves';


describe('<CategoriesFilter />', () => {

  const minProps = {
    categories: [{ id: 'computer', name: 'Computer' }],
    currCat: '',
    onChangeCategory: () => {},
  }

  test('renders without exploding', () => {
    const wrapper = shallow(<CategoriesFilter {...minProps}/>);
    expect(wrapper.length).toBe(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });


  test('should call onChangeCategory', () => {
    const onChangeCategorySpy = jest.fn();
    const value = minProps.categories[0].id;
    const wrapper = shallow(<CategoriesFilter {...minProps} onChangeCategory={onChangeCategorySpy}/>);
    wrapper.find('select').simulate('change', {
      target: { value }
    });
    expect(onChangeCategorySpy).toHaveBeenCalledWith(value);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
