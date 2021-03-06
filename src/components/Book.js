import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import BookShelfChanger from './BookShelfChanger';

const Book = ({book, shelves, onChangeShelf}) => (
  <div className="book-wrapper">
    <input type="checkbox" id={`check-${book.id}`} className="check" name="bookId" value={book.id}/>
    <label className="check-label" htmlFor={`check-${book.id}`}>Select</label>
    <div className="book">
      <Link
        to={`/book/${book.id}`}
        className="book-link" >
        <div className="book-top">
          <div className="book-cover" style={{
            backgroundImage: `url(${book.imageLinks.smallThumbnail && (book.imageLinks.smallThumbnail)})` }}></div>
        </div>
        <div className="book-header">
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{Array.isArray(book.authors) && (book.authors.join(', '))}</div>
        </div>
      </Link>

      <div className="book-shelf-changer">
        <Route render={(props) => (
          <BookShelfChanger
            {...props}
            book={book}
            shelves={shelves}
            onChangeShelf={onChangeShelf}
          />
        )}/>
      </div>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  shelves: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default Book;
