export const checkIfOwner = (currentOffer, navigator) => {
  const currentUserId = JSON.parse(localStorage.getItem("authStatus")).id;

  console.log("user Id is " + currentUserId);
  console.log("offer's owner Id is " + currentOffer.ownerId);
  console.log("they are the same: ", currentOffer.ownerId == currentUserId);
};
