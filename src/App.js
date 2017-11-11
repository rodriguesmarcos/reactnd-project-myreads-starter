import React from 'react'
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import './App.css'
import MyBooks from './components/MyBooks';
import SearchContainer from './components/SearchContainer';

const BooksApp = ({shelves, books, onChangeShelf, loading}) => (
  <div className="app">
    <Route path="/search" render={() => (
      <SearchContainer
        shelves={shelves}
        books={books}
        onChangeShelf={onChangeShelf}
      />
    )}/>

    <Route exact path="/" render={() => (
      <MyBooks
        shelves={shelves}
        books={books}
        onChangeShelf={onChangeShelf}
        loading={loading}
      />
    )}/>

  </div>
)

BooksApp.propTypes = {
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default BooksApp
