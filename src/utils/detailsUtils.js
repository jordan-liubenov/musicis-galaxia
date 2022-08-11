export const trimIdFromUrl = (url) => {
  //takes the current offer's ID from the details url
  return url.pathname.split("/details/")[1];
};

export const trimIdFromEdit = (url) => {
  //takes the current offer's ID from the edit url
  return url.pathname.split("/edit/")[1];
};

export const formatConditionString = (str) => {
  //returns the Condition of each item with the first letter changed to UpperCase
  let newStr = str.charAt(0).toUpperCase();
  newStr = newStr + str.substring(1, str.length);
  return newStr;
};

export const hasRated = (currentOffer) => {
  //function that checks if the currently logged-in user has rated the currently opened offer
  let rated = false;

  let ratedByArray = currentOffer.ratedBy;
  if (ratedByArray == undefined) return;

  const currentUserId = JSON.parse(localStorage.getItem("authStatus")).id;

  if (ratedByArray.includes(currentUserId)) {
    //if the user's id is in the RatedBy array
    rated = true;
  }

  return rated;
};
