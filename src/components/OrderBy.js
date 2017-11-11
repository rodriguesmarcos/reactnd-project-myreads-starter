import React from 'react';
import PropTypes from 'prop-types';

const OrderBy = ({onOrderBy, orderBy}) => (
  <div>
    Order by
    <select
      name="orderBy"
      defaultValue="orderBy"
      onChange={(e) => onOrderBy(e.target.value)}
    >
      <option value="title">Title</option>
      <option value="pageCount">Page Count</option>
      <option value="publishedDate">Published Date</option>
    </select>
  </div>
);

OrderBy.propTypes = {
  orderBy: PropTypes.string.isRequired,
  onOrderBy: PropTypes.func.isRequired,
}

export default OrderBy;
