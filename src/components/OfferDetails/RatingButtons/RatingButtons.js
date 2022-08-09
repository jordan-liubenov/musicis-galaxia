import { useContext, useState, useEffect } from "react";
import { CurrentOfferContext } from "../../../context/CurrentOfferContext";
import { handleRating } from "../../../services/ratingService";
import { useNavigate } from "react-router-dom";
import "../RatingButtons/RatingButtons.css";

import AlreadyRated from "../AlreadyRated/AlreadyRated";

const RatingButtons = (props) => {
  const hasRated = props.rated; //true/false based on if the user has rated the post yet

  const { currentOpenOffer } = useContext(CurrentOfferContext);

  const [rateStatus, setRateStatus] = useState(false);

  const navigator = useNavigate();

  useEffect(() => {
    setRateStatus(hasRated);
  }, [hasRated]);

  return rateStatus ? (
    <AlreadyRated />
  ) : (
    <div className="ratingButtonsDiv">
      <button
        className="likeBtn"
        onClick={() =>
          handleRating(
            hasRated,
            currentOpenOffer,
            navigator,
            "likes",
            setRateStatus
          )
        }
      >
        Like
      </button>
      <button
        className="dislikeBtn"
        onClick={() =>
          handleRating(
            hasRated,
            currentOpenOffer,
            navigator,
            "dislikes",
            setRateStatus
          )
        }
      >
        Dislike
      </button>
    </div>
  );
};

export default RatingButtons;
