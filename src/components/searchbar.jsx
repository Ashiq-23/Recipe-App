import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');  // Manage search query
  const navigate = useNavigate();  // Programmatic navigation

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/recipes?search=${query}`);  // Navigate to recipes page with search query
    }
  };

  return (
    <div className="search-bar-container">
      <h1>Find the Best Recipes for Your Next Meal</h1>  {/* Display the sentence */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}  // Update state as user types
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
