import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

const Book = ({book}) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{
        width: 128,
        height: 193,
        backgroundImage: `url(${book.imageLinks.smallThumbnail && (book.imageLinks.smallThumbnail)})` }}></div>
      <div className="book-shelf-changer">
        <BookShelfChanger/>
      </div>
    </div>
    <div className="book-title">{book.title}</div>
    <div className="book-authors">{Array.isArray(book.authors) && (book.authors.join(', '))}</div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
}

export default Book;
