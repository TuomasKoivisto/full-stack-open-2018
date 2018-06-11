import React from 'react';

export default ({filter, handleFilterChange}) => (
  <div>
    Rajaa näytettäviä:
    <input
      value={filter}
      onChange={handleFilterChange}
    />
  </div>
)
