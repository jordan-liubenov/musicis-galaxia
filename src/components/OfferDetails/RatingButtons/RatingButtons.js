import { useContext, useState, useEffect } from "react";
import { CurrentOfferContext } from "../../../context/CurrentOfferContext";
import { handleRating } from "../../../services/ratingService";
import { useNavigate } from "react-router-dom";
import "../RatingButtons/RatingButtons.css";

import AlreadyRated from "../AlreadyRated/AlreadyRated";

const RatingButtons = (props) => {
  const ratingStatus = props.ratingStatus; //state storing true or false if the post has been rated

  const { currentOpenOffer } = useContext(CurrentOfferContext);

  const navigator = useNavigate();

  return ratingStatus ? (
    <AlreadyRated />
  ) : (
    <div className="ratingButtonsDiv">
      <button
        className="likeBtn"
        onClick={() =>
          handleRating(
            ratingStatus,
            currentOpenOffer,
            navigator,
            "likes",
            props.setRatingStatus
          )
        }
      >
        Like
      </button>
      <button
        className="dislikeBtn"
        onClick={() =>
          handleRating(
            ratingStatus,
            currentOpenOffer,
            navigator,
            "dislikes",
            props.setRatingStatus
          )
        }
      >
        Dislike
      </button>
    </div>
  );
};

export default RatingButtons;
