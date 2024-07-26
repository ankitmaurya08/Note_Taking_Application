import React from 'react';
import './styles/SearchBar.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={e => setSearchQuery(e.target.value)}
      placeholder="Search notes..."
      className="search-bar"
    />
  );
};

export default SearchBar;
