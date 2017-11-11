import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';
import Shelf from './Shelf';
import { onlyUnique } from '../helpers';

class ShelfContainer extends Component {

  constructor() {
    super();

    this.orderBy = this.orderBy.bind(this);
    this.generateCategoriesArray = this.generateCategoriesArray.bind(this);
    this.mapCategories = this.mapCategories.bind(this);
    this.updateCategories = this.updateCategories.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.updateCurrCatOnMoveLastBook = this.updateCurrCatOnMoveLastBook.bind(this);
  }

  state = {
    orderBy: 'title',
    currCat: '',
    categories: [],
  }

  componentDidMount() {
    const { books } = this.props;
    if ( books.length > 0 ) {
      this.updateCategories(books);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { books:nextBooks } = nextProps;
    const { books } = this.props;

    if ( JSON.stringify(books) !== JSON.stringify(nextBooks) ) {
      this.updateCategories(nextBooks);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateCurrCatOnMoveLastBook(prevProps);
  }

  orderBy(orderBy) {
    this.setState({ orderBy });
  }

  changeCategory(category) {
    this.setState({ currCat: category });
  }

  updateCategories(books) {
    const uniqueCategories = this.generateCategoriesArray(books);
    const categories = this.mapCategories(uniqueCategories);
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

  /**
  * @description When all the books from the current category are moved to another shelf it resets the currCat state.
  * @param {Object} prevProps
  */
  updateCurrCatOnMoveLastBook(prevProps) {
    const { books: prevBooks } = prevProps;
    const { books } = this.props;
    const { currCat } = this.state;

    if ( currCat !== '' ) {
      const prevBookscurrCat = prevBooks.filter(b => Array.isArray(b.categories) && b.categories.includes(currCat) );
      const bookscurrCat = books.filter(b => Array.isArray(b.categories) && b.categories.includes(currCat) );

      if ( prevBookscurrCat.length > bookscurrCat.length && bookscurrCat.length === 0 ) {
        this.changeCategory('');
      }
    }
  }

  render() {
    const { shelf, books, shelves, onChangeShelf, loading } = this.props;
    const { orderBy, categories, currCat } = this.state;

    const shelfBooks = books.sort(sortBy(orderBy));
    const showing = !currCat ? books : books.filter(b => b.categories.includes(currCat));

    return (
      <Shelf
        shelf={shelf}
        books={shelfBooks}
        shelves={shelves}
        onChangeShelf={onChangeShelf}
        loading={loading}
        orderBy={orderBy}
        onOrderBy={this.orderBy}
        categories={categories}
        onChangeCategory={this.changeCategory}
        currCat={currCat}
        showing={showing}
      />
    )
  }
}

ShelfContainer.propTypes = {
  shelf: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default ShelfContainer;
