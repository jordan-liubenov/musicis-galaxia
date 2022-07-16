export const activeClassName = "isActive";

export const getUsername = () => {
  let username = localStorage.getItem("user");
  if (username) {
    return username;
  }
};
