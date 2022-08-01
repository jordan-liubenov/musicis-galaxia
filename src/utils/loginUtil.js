export const ERROR_MSGS = {
  username: <div className="errorDiv">Username not found.</div>,
  password: <div className="errorDiv">Password incorrect.</div>,
};

export const handleValue = (e, setValue) => {
  const { id, value } = e.target;

  setValue(value);
};

export const checkIfLoggedIn = () => {
  const authStatus = JSON.parse(localStorage.getItem("authStatus"));
  if (authStatus != null) {
    return true;
  } else {
    return false;
  }
};

export const logOut = (e, logOutUser, navigate) => {
  e.preventDefault();
  logOutUser();
  navigate("/");
};

export const getEmail = () => {
  let email = localStorage.getItem("email");
  if (email) return email;
};
