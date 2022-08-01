import { getCurrentToken } from "./postService";

export const authenticateUser = () => {
  const url = "http://localhost:5000/auth";

  const user = localStorage.getItem("user");
  if (!user) {
    return false; //if there is no existing user, return
  }

  //if user exists, send request to rest api and check if jwt token is verified
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

      console.log(isAuthenticated);
      return isAuthenticated;
    });
};
