import React from "react";

const Search = ({ search, searchInput, handleSerach }) => {
  return (
    <div className="Serach">
      <input type="text" value={search} ref={searchInput} onChange={handleSerach} />
    </div>
  );
}

export default Search;
