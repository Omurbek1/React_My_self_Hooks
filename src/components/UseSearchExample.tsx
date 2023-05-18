import React from "react";
import useSearch from "../hooks/useSearch";

function UseSearchExample() {
  const [query, searchResults, search] = useSearch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    search(value);
  };
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
      />

      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseSearchExample;
