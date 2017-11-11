import React from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';
import OrderBy from './OrderBy';

const Shelf = ({shelf, books, shelves, onChangeShelf, loading, orderBy, onOrderBy}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{shelf.name}</h2>
    <div className="bookshelf-books">
      { books.length > 0 && (<OrderBy orderBy={orderBy} onOrderBy={onOrderBy} />)}
      
      <BooksGrid
        shelf={shelf}
        books={books}
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
  orderBy: PropTypes.string.isRequired,
  onOrderBy: PropTypes.func.isRequired,
}

export default Shelf;
