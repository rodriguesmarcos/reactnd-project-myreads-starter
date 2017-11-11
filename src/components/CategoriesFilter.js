import React from 'react';
import PropTypes from 'prop-types';

const CategoriesFilter = ({categories, onChangeCategory, currCat}) => (
  <div>
    Filter by
    <select
      name="categoriesFilter"
      defaultValue={currCat}
      onChange={(e) => onChangeCategory(e.target.value)}
    >
      <option value="">All</option>
      {categories.map(c => (
        <option key={c.id} value={c.id}>{c.name}</option>
      ))}
    </select>
  </div>
);

CategoriesFilter.propTypes = {
  categories: PropTypes.array.isRequired,
  currCat: PropTypes.string.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
}

export default CategoriesFilter;
