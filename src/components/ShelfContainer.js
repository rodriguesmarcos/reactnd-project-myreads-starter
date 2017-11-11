import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';
import Shelf from './Shelf';

class ShelfContainer extends Component {

  constructor() {
    super();

    this.orderBy = this.orderBy.bind(this);
  }

  state = {
    orderBy: 'title',
  }

  orderBy(orderBy) {
    this.setState({ orderBy });
  }

  render() {
    const { shelf, books, shelves, onChangeShelf, loading } = this.props;
    const { orderBy } = this.state;

    const shelfBooks = books.filter(book => shelf.id === book.shelf).sort(sortBy(orderBy));

    return (
      <Shelf
        shelf={shelf}
        books={shelfBooks}
        shelves={shelves}
        onChangeShelf={onChangeShelf}
        loading={loading}
        orderBy={orderBy}
        onOrderBy={this.orderBy}
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
