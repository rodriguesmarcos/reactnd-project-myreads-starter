import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Book from './Book';

const Shelf = ({shelf, books, shelves, onChangeShelf}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{shelf.name}</h2>
    <div className="bookshelf-books">
      <TransitionGroup component="ol" className="books-grid">
        {books.filter(book => shelf.id === book.shelf)
          .map(book => (
              <CSSTransition
                key={book.id}
                appear={true}
                timeout={{
                 enter: 600,
                 exit: 300,
                }}
                classNames="book"
              >
                <li>
                  <Book
                    book={book}
                    shelves={shelves}
                    onChangeShelf={onChangeShelf}
                  />
                </li>
              </CSSTransition>

          )
        )}
      </TransitionGroup>
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
