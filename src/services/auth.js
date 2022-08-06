import { getCurrentToken } from "./postService";

export const authenticateUser = () => {
  //verifies current user's token
  const url = "http://localhost:5000/auth";

  const user = JSON.parse(localStorage.getItem("authStatus")).username;
  if (!user) {
    return false; //if there is no existing user, return immediate false
  }

  //if user exists, send request to rest api and verify jwt

  const token = getCurrentToken();
  let toSend = { token };

  let isAuthenticated = true;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Auth-Token": JSON.stringify(toSend),
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) isAuthenticated = false;
      if (data.success) isAuthenticated = true;
    });

  return isAuthenticated;
};

export const authenticateOwner = (currentOffer) => {
  //verifies if the current user is the owner of the passed entry as parameter
  if (!currentOffer) return;
  const currentUserId = JSON.parse(localStorage.getItem("authStatus")).id;

  let ownerAuthenticated = true;

  //verify user's token
  const isAuthenticated = authenticateUser();
  if (!isAuthenticated) return false;

  //after token was verified check if ownerId of Offer is the same as currentUserId

  if (currentUserId != currentOffer.ownerId) {
    ownerAuthenticated = false;
  }

  return ownerAuthenticated;
};
