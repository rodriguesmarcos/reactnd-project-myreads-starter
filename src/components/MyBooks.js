import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Shelf from './Shelf';

const MyBooks = ({onShowSearchPage, shelves, books}) => (
  <div className="list-books">
    <Header />
    <div className="list-books-content">
      <div>
        {shelves.map( shelf => (
          <Shelf
            key={shelf.id}
            shelf={shelf}
            books={books}
          />
        ))}
      </div>
    </div>
    <div className="open-search">
      <a onClick={(e) => onShowSearchPage(true)}>Add a book</a>
    </div>
  </div>
);

MyBooks.propTypes = {
  onShowSearchPage: PropTypes.func.isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
  books: PropTypes.array.isRequired,
}

export default MyBooks;
