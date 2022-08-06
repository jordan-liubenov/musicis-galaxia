export const checkIfOwner = (currentOffer, navigator) => {
  const currentUserId = JSON.parse(localStorage.getItem("authStatus")).id;

  if (!currentOffer) return;

  if (currentOffer.ownerId != currentUserId) {
    navigator("/404");
  }
};
