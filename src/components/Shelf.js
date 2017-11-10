import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const Shelf = ({shelf}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{shelf.name}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        <li>
          <Book />
        </li>
      </ol>
    </div>
  </div>
);

Shelf.propTypes = {
  shelf: PropTypes.object.isRequired,
}

export default Shelf;
