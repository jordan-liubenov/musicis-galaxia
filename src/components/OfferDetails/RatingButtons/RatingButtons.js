import { useContext } from "react";
import { CurrentOfferContext } from "../../../context/CurrentOfferContext";
import { handleRating } from "../../../services/ratingService";
import { useNavigate } from "react-router-dom";
import "../RatingButtons/RatingButtons.css";
import { useState, useEffect } from "react";

const RatingButtons = (props) => {
  const hasRated = props.rated; //true or false, based on if the user has rated this post or not

  const { currentOpenOffer } = useContext(CurrentOfferContext);

  const [rateStatus, setRateStatus] = useState(false);

  useEffect(() => {
    if (hasRated) setRateStatus(true);
    if (!hasRated) setRateStatus(false);
  }, []);

  const navigator = useNavigate();

  return rateStatus ? (
    <></>
  ) : (
    <div className="ratingButtonsDiv">
      <button
        className="likeBtn"
        onClick={() =>
          handleRating(hasRated, currentOpenOffer, navigator, "likes")
        }
      >
        Like
      </button>
      <button
        className="dislikeBtn"
        onClick={() =>
          handleRating(hasRated, currentOpenOffer, navigator, "dislikes")
        }
      >
        Dislike
      </button>
    </div>
  );
};

export default RatingButtons;
