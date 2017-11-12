import React from 'react';
import PropTypes from 'prop-types';

const BookCounter = ({total, showing = total}) => {

  if ( total === showing )
    return <span className="bookshelf-counter">{total}</span>;

  if ( total > showing )
    return <span className="bookshelf-counter">{`${showing} of ${total}`}</span>;

};

BookCounter.propTypes = {
  total: PropTypes.number.isRequired,
  showing: PropTypes.number,
}

export default BookCounter;
