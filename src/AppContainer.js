import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'
import App from './App';

class AppContainer extends Component {

  constructor() {
    super();

    this.onShowSearchPage = this.onShowSearchPage.bind(this);
  }

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
  }

  onShowSearchPage(status) {
    this.setState({ showSearchPage: status })
  }

  render() {
    const { showSearchPage } = this.state;
    return (
      <App
        showSearchPage={showSearchPage}
        onShowSearchPage={this.onShowSearchPage}
      />
    )
  }

}

export default AppContainer;
