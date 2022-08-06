import { useNavigate } from "react-router-dom";
import "../OfferDeleteButton/OfferDeleteButton.css";

const OfferDeleteButton = () => {
  const navigator = useNavigate();
  return (
    <div className="deleteButtonContainer">
      <button className="deleteBtn">Delete</button>
    </div>
  );
};

export default OfferDeleteButton;
