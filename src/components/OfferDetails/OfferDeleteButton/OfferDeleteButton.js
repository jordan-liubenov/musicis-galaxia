import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { deleteOffer } from "../../../services/postService";
import { CurrentOfferContext } from "../../../context/CurrentOfferContext";

import "../OfferDeleteButton/OfferDeleteButton.css";
const OfferDeleteButton = () => {
  const { currentOpenOffer } = useContext(CurrentOfferContext);

  const navigator = useNavigate();
  
  return (
    <div className="deleteButtonContainer">
      <button
        className="deleteBtn"
        onClick={() => deleteOffer(currentOpenOffer, navigator)}
      >
        Delete
      </button>
    </div>
  );
};

export default OfferDeleteButton;
