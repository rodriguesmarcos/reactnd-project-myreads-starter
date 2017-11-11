import React from 'react'
import PropTypes from 'prop-types';
import './App.css'
import MyBooks from './components/MyBooks';
import SearchContainer from './components/SearchContainer';

const BooksApp = ({showSearchPage, onShowSearchPage, shelves, books, onChangeShelf, loading}) => (
  <div className="app">
    {showSearchPage ? (
      <SearchContainer
        onShowSearchPage={onShowSearchPage}
        shelves={shelves}
        books={books}
        onChangeShelf={onChangeShelf}
      />
    ) : (
      <MyBooks
        onShowSearchPage={onShowSearchPage}
        shelves={shelves}
        books={books}
        onChangeShelf={onChangeShelf}
        loading={loading}
      />
    )}
  </div>
)

BooksApp.propTypes = {
  showSearchPage: PropTypes.bool.isRequired,
  onShowSearchPage: PropTypes.func.isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default BooksApp
