import { Link, useNavigate } from "react-router-dom";
import "../OfferEditButton/OfferEditButton.css";

const OfferEditButton = (props) => {
  const navigator = useNavigate();
  return (
    <div className="editButtonContainer">
      <Link to={"/edit/" + props.entryId}>
        <button className="editBtn">Edit</button>
      </Link>
    </div>
  );
};

export default OfferEditButton;
