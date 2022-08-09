export const handleRating = (
  hasRated,
  currentOpenOffer,
  navigator,
  ratingType,
  setRateStatus
) => {
  if (hasRated) return;

  setRateStatus(true);

  const url = "http://localhost:5000/rate";

  const currentUserId = JSON.parse(localStorage.getItem("authStatus")).id;

  currentOpenOffer.currentUserId = currentUserId;

  if (ratingType == "likes") currentOpenOffer.ratingType = "like";
  if (ratingType == "dislikes") currentOpenOffer.ratingType = "dislike";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(currentOpenOffer),
  }).catch((error) => navigator("/404"));
};
