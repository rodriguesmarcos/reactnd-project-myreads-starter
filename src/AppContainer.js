import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import App from './App';
import { addCategoryToUncategorized } from './helpers';

class AppContainer extends Component {

  constructor() {
    super();

    this.getBooks = this.getBooks.bind(this);
    this.changeShelf = this.changeShelf.bind(this);
    this.bulkMove = this.bulkMove.bind(this);
  }

  state = {
    books: [],
    loading: false,
    error: '',
  }


  componentDidMount() {
    this.getBooks();
  }

  async getBooks() {
    try {
      this.setState({ loading: true });
      const booksResults = await BooksAPI.getAll()
      const books = addCategoryToUncategorized(booksResults);
      this.setState({ books, loading: false });
    } catch (err) {
      console.error(err);
      this.setState({ error: 'We were unable to retrieve your books.' });
      this.setState({ loading: false });
    }
  }

  bulkMove(books, shelf) {
    books.forEach( b => this.changeShelf( b, shelf ) );
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
    const { books, loading } = this.state;
    const shelves = [
        { id: 'currentlyReading', name: 'Currently Reading' },
        { id: 'wantToRead', name: 'Want to Read' },
        { id: 'read', name: 'Read' },
    ];

    return (
      <App
        shelves={shelves}
        books={books}
        onChangeShelf={this.changeShelf}
        loading={loading}
        onBulkMove={this.bulkMove}
      />
    )
  }

}

export default AppContainer;
