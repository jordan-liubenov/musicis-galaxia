export const activeClassName = "isActive";

export const getUsername = () => {
  const authStatus = JSON.parse(localStorage.getItem("authStatus"));
  return authStatus.username;
};
