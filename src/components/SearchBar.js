

export default function SearchBar({ query, sortBy, onQueryChange, onSortChange, resetPage }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        placeholder="Search for a movie..."
        onChange={(e) => {
          onQueryChange(e.target.value);
          resetPage();
        }}
      />
      <select
        className="dropdown"
        value={sortBy}
        onChange={(e) => {
          onSortChange(e.target.value);
          onQueryChange('');
          resetPage();
        }}
      >
        <option value="">Sort By</option>
        <option value="release_date.asc">Release Date (Asc)</option>
        <option value="release_date.desc">Release Date (Desc)</option>
        <option value="vote_average.asc">Rating (Asc)</option>
        <option value="vote_average.desc">Rating (Desc)</option>
      </select>
    </div>
  );
}
