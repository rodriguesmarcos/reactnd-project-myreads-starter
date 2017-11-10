import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Shelf = ({shelf, books}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{shelf.name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.filter(book => shelf.id === book.shelf)
          .map(book => (
            <li key={book.id}>
              <Book
                book={book}
              />
            </li>
          )
        )}
      </ol>
    </div>
  </div>
);

Shelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
}

export default Shelf;
