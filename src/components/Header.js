import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({location}) => (
  <div className="header list-books-title">
    { location.pathname !== "/" && (
      <Link
        className="close-search"
        to="/">
        Close</Link>
    )}
    <h1>MyReads</h1>
  </div>
);

export default Header;
