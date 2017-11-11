import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';
import * as BooksAPI from '../BooksAPI';
import { addCategoryToUncategorized } from '../helpers';
import Search from './Search';


class SearchContainer extends Component {

  constructor() {
    super();

    this.updateQuery = this.updateQuery.bind(this);
    this.searchBooks = this.searchBooks.bind(this);
    this.orderBy = this.orderBy.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
  }

  state = {
    results: [],
    query: '',
    loading: false,
    orderBy: 'title',
    currCat: '',
    categories: [],
  }

  updateQuery(query) {
    this.setState({ query }, () => {
      this.searchBooks(query);
    });
  }

  orderBy(orderBy) {
    this.setState({ orderBy });
  }

  changeCategory(category) {
    this.setState({ currCat: category });
  }

  async searchBooks(query) {
    if ( query ) {
      try {
        this.setState({ loading: true });
        const booksResults = await BooksAPI.search(query.trim());
        const categorizedBooks = addCategoryToUncategorized(booksResults);
        const results = this.updateResulsts(categorizedBooks);
        this.setState({ results, loading: false });
      } catch (e) {
        this.setState({
          results: [],
          loading: false
        });
      }
    }
    else {
      this.setState({ results: [], loading: false });
    }
  }

  updateResulsts( results ) {
    const { books:myBooks } = this.props;
    const resultsIds = results.map(b => b.id);
    const myBooksOnResult = myBooks.filter(b => resultsIds.indexOf(b.id));
    const myBooksOnResultIds = myBooksOnResult.map(b => b.id);
    const otherBooks = results.filter(b => !myBooksOnResultIds.indexOf(b.id) );
    return otherBooks.concat(myBooksOnResult);
  }

  render() {
    const { shelves, onChangeShelf } = this.props;
    const { query, results, loading, orderBy, currCat, categories  } = this.state;
    const showing = !currCat ? results : results.filter(b => b.categories.includes(currCat));

    return (
      <Search
        shelves={shelves}
        results={results.sort(sortBy(orderBy))}
        onChangeShelf={onChangeShelf}
        loading={loading}
        orderBy={orderBy}
        onOrderBy={this.orderBy}
        categories={categories}
        onChangeCategory={this.changeCategory}
        currCat={currCat}
        showing={showing}
        onChangeQuery={this.updateQuery}
        query={query}
      />
    );
  }
}

SearchContainer.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
}

export default SearchContainer;
