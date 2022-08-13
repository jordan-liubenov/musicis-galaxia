import "../NoResults/NoResults.css";

const NoResults = () => {
  //component which gets rendered when there are no matches for the searchbar value
  return (
    <div className="noResultDiv">
      <p className="noResultMessage">
        No results found with the searched value.
      </p>
    </div>
  );
};

export default NoResults;
