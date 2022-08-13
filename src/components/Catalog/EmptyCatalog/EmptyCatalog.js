import { Link } from "react-router-dom";
import "../EmptyCatalog/EmptyCatalog.css";

const EmptyCatalog = () => {
  //component which gets rendered when the catalog is empty
  return (
    <div className="emptyCatalogDiv">
      <div className="emptyCatalogText">
        <h2>No offers have been posted yet!</h2>
      </div>
      <div className="redirectToPostDiv">
        <Link className="redirectToPostBtn" to={"/post"}>
          Create a new one
        </Link>
      </div>
    </div>
  );
};

export default EmptyCatalog;
