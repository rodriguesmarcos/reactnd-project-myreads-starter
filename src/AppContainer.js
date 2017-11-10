import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import App from './App';

class AppContainer extends Component {

  constructor() {
    super();

    this.onShowSearchPage = this.onShowSearchPage.bind(this);
    this.getBooks = this.getBooks.bind(this);
    this.changeShelf = this.changeShelf.bind(this);
  }

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    error: '',
  }


  componentDidMount() {
    this.getBooks();
  }

  async getBooks() {
    try {
      const books = await BooksAPI.getAll()
      this.setState({ books });
    } catch (err) {
      console.error(err);
      this.setState({ error: 'We were unable to retrieve your books.' });
    }
  }

  onShowSearchPage(status) {
    this.setState({ showSearchPage: status })
  }

  async changeShelf(updatedBook, shelf) {
    try {
      const shelvesResult = await BooksAPI.update(updatedBook, shelf);
      this.setState(prevState => {
        const { books:prevBooks } = prevState;
        const otherBooks = prevBooks.filter(book => updatedBook.id !== book.id);
        if ( shelf !== 'none' && -1 !== shelvesResult[shelf].indexOf(updatedBook.id) ) {
          const book = {
            ...updatedBook,
            shelf: shelf
          };
          return { books: otherBooks.concat([ book ])};
        }
        return { books: otherBooks };
      });
    } catch (err) {
      console.error(err);
      this.setState({ error: "We were unable to update the book's shelf." });
    }
  }

  render() {
    const { showSearchPage, books } = this.state;
    const shelves = [
        { id: 'currentlyReading', name: 'Currently Reading' },
        { id: 'wantToRead', name: 'Want to Read' },
        { id: 'read', name: 'Read' },
    ];

    return (
      <App
        showSearchPage={showSearchPage}
        onShowSearchPage={this.onShowSearchPage}
        shelves={shelves}
        books={books}
        onChangeShelf={this.changeShelf}
      />
    )
  }

}

export default AppContainer;
