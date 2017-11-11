import React from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';

const Shelf = ({shelf, books, shelves, onChangeShelf, loading}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{shelf.name}</h2>
    <div className="bookshelf-books">
      <BooksGrid
        shelf={shelf}
        books={books.filter(book => shelf.id === book.shelf)}
        shelves={shelves}
        onChangeShelf={onChangeShelf}
        loading={loading}
      />
    </div>
  </div>
);

Shelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Shelf;
