import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import BookShelfChanger from './BookShelfChanger';

const Book = ({book, shelves, onChangeShelf}) => (
  <div className="book">

    <input type="checkbox" name="bookId" value={book.id}/>

    <Link
      to={`/book/${book.id}`}
      className="book-link" >
      <div className="book-top">
        <div className="book-cover" style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${book.imageLinks.smallThumbnail && (book.imageLinks.smallThumbnail)})` }}></div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{Array.isArray(book.authors) && (book.authors.join(', '))}</div>
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
);

Book.propTypes = {
  book: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  shelves: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default Book;
