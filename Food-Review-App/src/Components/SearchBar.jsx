import React from 'react'

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Meals"
        className="border p-2 rounded w-1/2"
      />
    </div>
  );
};

export default SearchBar