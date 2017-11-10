import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Shelf from './Shelf';

const MyBooks = ({onShowSearchPage}) => (
  <div className="list-books">
    <Header />
    <div className="list-books-content">
      <div>
        <Shelf />
      </div>
    </div>
    <div className="open-search">
      <a onClick={(e) => onShowSearchPage(true)}>Add a book</a>
    </div>
  </div>
);

MyBooks.propTypes = {
  onShowSearchPage: PropTypes.func.isRequired,
}

export default MyBooks;
