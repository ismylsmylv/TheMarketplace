import React from "react";

type Props = {};

function SearchBar({}: Props) {
  return (
    <div className="SearchBar">
      <select name="" id="">
        <option value="">all categories</option>
        <option value="">all categories</option>
        <option value="">all categories</option>
        <option value="">all categories</option>
      </select>
      <input type="text" placeholder="Search in the market" />
      <button>search</button>
    </div>
  );
}

export default SearchBar;
