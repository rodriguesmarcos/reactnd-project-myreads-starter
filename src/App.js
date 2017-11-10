import React from 'react'
import PropTypes from 'prop-types';
import './App.css'
import MyBooks from './components/MyBooks';

const BooksApp = ({showSearchPage, onShowSearchPage, shelves, books}) => (
  <div className="app">
    {showSearchPage ? (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => onShowSearchPage(false)}>Close</a>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author"/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    ) : (
      <MyBooks
        onShowSearchPage={onShowSearchPage}
        shelves={shelves}
        books={books}
      />
    )}
  </div>
)

BooksApp.propTypes = {
  showSearchPage: PropTypes.bool.isRequired,
  onShowSearchPage: PropTypes.func.isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
  books: PropTypes.array.isRequired,
}

export default BooksApp
