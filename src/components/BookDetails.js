import React from 'react';
import PropTypes from 'prop-types';
import { FoldingCube } from 'better-react-spinkit';
import { Route } from 'react-router-dom';
import BookShelfChanger from './BookShelfChanger';

const BookDetails = ({match, getViewableBook, onChangeShelf, shelves}) => {

  const { bookId } = match.params;
  const book = getViewableBook(bookId);

  if (!book.id)
    return <FoldingCube size={75} color="#2e7c31" className="loading-spinner" />;

  const bookImage = book.imageLinks && book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail : '';    

  return (
    <div className="book-details">
      <div className="book-details-cover">
        <div className="book-top">

          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${bookImage})`
          }}>
          </div>

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

      <div>
        <div className="book-details-header">
          <h2 className="book-details-title">{book.title}</h2>
          {book.subtitle && (<h3 className="book-details-subtitle">{book.subtitle}</h3>)}
          {Array.isArray(book.authors) && (<div className="book-details-authors">{book.authors.join(', ')}</div>)}
        </div>

        {book.description && (
          <div className="book-details-content">
            {book.description}
          </div>
        )}

        <div className="book-details-footer">
          <h4 className="book-details-more">More Details</h4>
          <ul>
            {book.pageCount && (<li>Pages: {book.pageCount}</li>)}
            {book.language && (<li>Language: {book.language}</li>)}
            {book.publishedDate && (<li>Published Date: {book.publishedDate}</li>)}
            {book.publisher && (<li>Publisher: {book.publisher}</li>)}
          </ul>
        </div>
      </div>


    </div>
  )
};

BookDetails.propTypes = {
  match: PropTypes.object.isRequired,
  getViewableBook: PropTypes.func.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default BookDetails;
