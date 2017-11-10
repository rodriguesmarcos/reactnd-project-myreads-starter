import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Shelf = ({shelf, books, shelves, onChangeShelf}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{shelf.name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.filter(book => shelf.id === book.shelf)
          .map(book => (
            <li key={book.id}>
              <Book
                book={book}
                shelves={shelves}
                onChangeShelf={onChangeShelf}
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
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default Shelf;
