import {
  checkForNumber,
  checkForUppercase,
  validateEmail,
} from "../utils/registerUtil";

const REGISTER_ERRORS = {
  usernameErr: <div className="errorDiv">Username taken.</div>,
  emailErr: <div className="errorDiv">Email taken.</div>,
};

export const submitRegister = async (
  e,
  email,
  user,
  pass,
  rePass,
  showEmailErr,
  showUsernameErr,
  navigation
) => {
  e.preventDefault();

  const isValid = validator(email, user, pass, rePass);
  if (!isValid) {
    return;
  }

  let userObj = {
    email,
    user,
    pass,
    rePass,
  };

  try {
    const req = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObj),
    });
    const res = await req.json();
    if (res.error.usernameTaken) {
      showUsernameErr(REGISTER_ERRORS.usernameErr);
      return;
    } else if (res.error.emailTaken) {
      showEmailErr(REGISTER_ERRORS.emailErr);
      return;
    }
    navigation("/login");
  } catch (error) {
    console.log(error);
    navigation("/404");
  }
};

export const submitLogin = async (
  e,
  user,
  pass,
  navigate,
  showPassErr,
  showUserErr,
  authenticateUser
) => {
  e.preventDefault();

  if (user.length == 0 || pass.length == 0) {
    showUserErr(true);
    showPassErr(true);
    return;
  }

  let userObj = {
    user,
    pass,
  };

  try {
    const req = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userObj),
    });

    const res = await req.json();

    //validate errors if there are any
    if (res.error) {
      if (res.error.usernameErr) {
        showUserErr(true);
        return;
      } else if (res.error.passwordErr) {
        showUserErr(false);
        showPassErr(true);
        return;
      }
    }

    localStorage.setItem("token", res.result);
    localStorage.setItem("user", res.username);
    localStorage.setItem("id", res.id);
    localStorage.setItem("email", res.email);

    document.cookie = "token=" + res.result;

    authenticateUser();

    navigate("/");
  } catch (error) {
    console.log(error);
    navigate("/404");
  }
};

const validateUsername = (str) => {
  let isValid = false;
  if (str.length >= 6) {
    isValid = true;
  } else {
    isValid = false;
  }
  return isValid;
};

const validatePassword = (str) => {
  let isValid = false;

  if (str.length >= 8) {
    if (checkForNumber(str) && checkForUppercase(str)) {
      isValid = true;
    } else {
      isValid = false;
    }
  }

  return isValid;
};

const validateRepass = (initialPass, rePass) => {
  let isValid = false;
  if (initialPass == rePass) {
    isValid = true;
  }
  return isValid;
};

function validator(email, username, password, rePass) {
  let isValid = false;

  if (
    validateEmail(email) &&
    validateUsername(username) &&
    validatePassword(password) &&
    validateRepass(password, rePass)
  ) {
    isValid = true;
  }

  return isValid;
}
