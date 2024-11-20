import React, { useState } from 'react';

const FilterComponent = ({ setFilters }) => {
  const [category, setCategory] = useState('');

  const handleFilterChange = (e) => {
    setCategory(e.target.value);
    setFilters({ category: e.target.value });
  };

  return (
    <div>
      <label>Filter by Category:</label>
      <select value={category} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>
    </div>
  );
};

export default FilterComponent;
