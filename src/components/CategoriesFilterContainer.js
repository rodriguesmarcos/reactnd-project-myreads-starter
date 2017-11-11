import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';
import { onlyUnique } from '../helpers';
import CategoriesFilter from './CategoriesFilter';

class CategoriesFilterContainer  extends Component {

  constructor() {
    super();

    this.generateCategoriesArray = this.generateCategoriesArray.bind(this);
    this.mapCategories = this.mapCategories.bind(this);
  }

  state = {
    categories: []
  }

  componentDidMount() {
    const { books } = this.props;
    if ( books.length > 0 ) {
      this.updateCategories(books);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { books: nextShowing } = nextProps;
    const { books } = this.props

    if ( JSON.stringify(nextShowing) !== JSON.stringify(books)) {
      this.updateCategories(nextShowing);
    }
  }

  updateCategories(books) {
    const allCategories = this.generateCategoriesArray(books)
    const categories = this.mapCategories(allCategories)
      .sort( sortBy( 'name' ));;
    this.setState({ categories });
  }

  /**
  * @description Generate an array of categories from books
  * @param {Array} prevProps
  */
  generateCategoriesArray(books) {
    const allCategories = books.map( b => b.categories )
      .reduce( (arr, val) => arr.concat(val), [] );
    const categories = allCategories.filter(onlyUnique);
    return categories;
  }

  mapCategories(categories) {
    const catObjects = categories.map( c => ( { id: c, name: c } ) );
    return catObjects;
  }

  render() {
    const { currCat, onChangeCategory } = this.props;
    const { categories } = this.state;

    return (
      <CategoriesFilter
        categories={categories}
        currCat={currCat}
        onChangeCategory={onChangeCategory}
      />
    )
  }
}

CategoriesFilterContainer.propTypes = {
  books: PropTypes.array.isRequired,
  currCat: PropTypes.string.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
}

export default CategoriesFilterContainer;
