import "../SearchBar/SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="searchBarContainer">
      <input
        className="searchBar"
        type="text"
        placeholder="Search for an offer here..."
        value={props.searchValue}
        onChange={props.handleSearchBar}
      ></input>
    </div>
  );
};

export default SearchBar;
