import React from 'react';
import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';
import BooksGrid from './BooksGrid';
import OrderBy from './OrderBy';
import CategoriesFilterContainer from './CategoriesFilterContainer';
import BookCounter from './BookCounter';
import BulkMove from './BulkMove';

const Search = ({results, shelves, onChangeShelf, loading, orderBy, onOrderBy, categories, currCat, onChangeCategory, showing, onChangeQuery, query, onBulkMove, books }) => (
  <div>
    <div className="search-books">
      <div className="search-books-bar">
        <div className="search-books-input-wrapper">
          <DebounceInput
            minLength={2}
            debounceTimeout={300}
            placeholder="Search by title or author"
            value={query}
            onChange={e => onChangeQuery(e.target.value)} />

        </div>
      </div>

      <div className="search-wrapper">
        <h2 className="search-title">
          Search Results
          { results.length > 0 && (<BookCounter total={results.length} showing={showing.length} />)}
        </h2>

        <div className="search-books-results">

          { results.length > 0 && (<OrderBy orderBy={orderBy} onOrderBy={onOrderBy} />)}

          { results.length > 0 && (<CategoriesFilterContainer books={results} currCat={currCat} onChangeCategory={onChangeCategory} />)}

          <BulkMove
            shelves={shelves}
            onBulkMove={onBulkMove}
            books={results}
            showing={showing}
          >
            <BooksGrid
              books={showing}
              shelves={shelves}
              onChangeShelf={onChangeShelf}
              loading={loading}
            />
          </BulkMove>
        </div>
      </div>
    </div>
  </div>
);

Search.propTypes = {
  results: PropTypes.array.isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  orderBy: PropTypes.string.isRequired,
  onOrderBy: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  currCat: PropTypes.string.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
  showing: PropTypes.array.isRequired,
  onChangeQuery: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  onBulkMove: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
}

export default Search;
