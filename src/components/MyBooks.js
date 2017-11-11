import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from './Header';
import ShelfContainer from './ShelfContainer';

const MyBooks = ({shelves, books, onChangeShelf, loading, onBulkMove}) => (
  <div className="list-books">
    <Header />
    <div className="list-books-content">
      <div>
        {shelves.map( shelf => (
          <ShelfContainer
            key={shelf.id}
            shelf={shelf}
            books={books.filter(book => shelf.id === book.shelf)}
            shelves={shelves}
            onChangeShelf={onChangeShelf}
            loading={loading}
            onBulkMove={onBulkMove}
          />
        ))}
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);

MyBooks.propTypes = {
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  onBulkMove: PropTypes.func.isRequired,
}

export default MyBooks;
