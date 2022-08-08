import "../NoResults/NoResults.css";

const NoResults = () => {
  return (
    <div className="noResultDiv">
      <p className="noResultMessage">
        No results found with the searched value.
      </p>
    </div>
  );
};

export default NoResults;
