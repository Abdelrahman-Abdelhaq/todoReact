const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search note..."
      className="search-input"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default Search;
