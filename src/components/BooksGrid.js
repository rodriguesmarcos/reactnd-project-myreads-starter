import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FoldingCube } from 'better-react-spinkit';
import Book from './Book';

const BooksGrid = ({shelf, books, shelves, onChangeShelf, loading}) => {

  if ( loading )
    return <FoldingCube size={75} color="#2e7c31" className="loading-spinner" />;

  if ( books.length === 0 ) {
    return (
      <div className="message">
        <p>There are no books {shelf && (`in ${shelf.name} shelf`)}</p>
      </div>
    );
  }

  return (
    <TransitionGroup component="ol" className="books-grid">
      {books.map(book => (
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
        </CSSTransition>)
      )}
    </TransitionGroup>
  )
};

BooksGrid.propTypes = {
  shelf: PropTypes.object,
  books: PropTypes.array.isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default BooksGrid;
