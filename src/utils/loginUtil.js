export const ERROR_MSGS = {
  username: <div className="errorDiv">Username not found.</div>,
  password: <div className="errorDiv">Password incorrect.</div>,
};

export const handleValue = (e, setValue) => {
  const { id, value } = e.target;

  setValue(value);
};

export const checkIfLoggedIn = () => {
  const userToken = localStorage.getItem("user");
  if (userToken != null) {
    return true;
  } else {
    return false;
  }
};

export const logOut = (e, navigate) => {
  e.preventDefault();
  localStorage.clear();
  navigate("/");
};

export const getEmail = () => {
  let email = localStorage.getItem("email");
  if (email) return email;
};
