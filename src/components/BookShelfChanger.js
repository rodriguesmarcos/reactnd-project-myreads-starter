import React from 'react';
import PropTypes from 'prop-types';

const BookShelfChanger = ({book, shelves, onChangeShelf}) => (
  <select
    defaultValue={book.shelf || 'none'}
    onChange={(e) => {
      const shelf = e.target.value;
      onChangeShelf(book, shelf);
    }}
  >
    <option value="none" disabled>Move to...</option>
    {shelves.map(shelf => (
      <option
        key={shelf.id}
        value={shelf.id}
      >{shelf.name}</option>
    ))}
    <option value="none">None</option>
  </select>
);

BookShelfChanger.propTypes = {
  shelves: PropTypes.array.isRequired,
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired
  }).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default BookShelfChanger;
