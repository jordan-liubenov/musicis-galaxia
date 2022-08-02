import { getCurrentToken } from "./postService";

export const authenticateUser = () => {
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
