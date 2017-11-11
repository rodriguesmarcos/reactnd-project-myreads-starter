import React from 'react'
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import MyBooks from './components/MyBooks';
import SearchContainer from './components/SearchContainer';
import BookDetails from './components/BookDetails';

const BooksApp = ({shelves, books, onChangeShelf, loading, onBulkMove, getViewableBook, updateTempViewableBooks}) => (
  <div className="app">
    <Route component={Header}/>

    <Route path="/search" render={() => (
      <SearchContainer
        shelves={shelves}
        books={books}
        onChangeShelf={onChangeShelf}
        onBulkMove={onBulkMove}
        updateTempViewableBooks={updateTempViewableBooks}
      />
    )}/>

    <Route exact path="/" render={() => (
      <MyBooks
        shelves={shelves}
        books={books}
        onChangeShelf={onChangeShelf}
        loading={loading}
        onBulkMove={onBulkMove}
      />
    )}/>

    <Route exact path="/book/:bookId" render={(props) => (
      <BookDetails
        {...props}
        getViewableBook={getViewableBook}
        shelves={shelves}
        onChangeShelf={onChangeShelf}
      />
    )}/>

  </div>
)

BooksApp.propTypes = {
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  onBulkMove: PropTypes.func.isRequired,
}

export default BooksApp
