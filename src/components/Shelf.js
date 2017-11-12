import React from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';
import OrderBy from './OrderBy';
import CategoriesFilterContainer from './CategoriesFilterContainer';
import BulkMove from './BulkMove';
import BookCounter from './BookCounter';

const Shelf = ({shelf, books, shelves, onChangeShelf, loading, orderBy, onOrderBy, categories, onChangeCategory, currCat, showing, onBulkMove }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">
      {shelf.name}
      { books.length > 0 && (<BookCounter total={books.length} showing={showing.length} />)}
    </h2>
    <div className="bookshelf-books">

      { showing.length > 0 && (<OrderBy orderBy={orderBy} onOrderBy={onOrderBy} />)}

      { showing.length > 0 && (<CategoriesFilterContainer books={books} currCat={currCat} onChangeCategory={onChangeCategory} />)}

      <BulkMove
        books={books}
        shelves={shelves}
        shelf={shelf}
        onBulkMove={onBulkMove}
        showing={showing}
      >
        <BooksGrid
          shelf={shelf}
          books={showing}
          shelves={shelves}
          onChangeShelf={onChangeShelf}
          loading={loading}
        />
      </BulkMove>
    </div>
  </div>
);


Shelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  orderBy: PropTypes.string.isRequired,
  onOrderBy: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  currCat: PropTypes.string.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
  showing: PropTypes.array.isRequired,
  onBulkMove: PropTypes.func.isRequired,
}

export default Shelf;
