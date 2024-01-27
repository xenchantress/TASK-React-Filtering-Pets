import React from 'react';

function SearchBar({ query, setQuery }) {
  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="input-group rounded">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        value={query}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;
