import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button className="search-button" onClick={() => handleSearch(search)}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
