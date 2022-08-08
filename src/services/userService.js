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

    //check if response was successful or has error

    if (res.msg) {
      navigation("/login");
    } else if (res.error) {
      if (res.error.usernameTaken) {
        showUsernameErr(REGISTER_ERRORS.usernameErr);
      } else {
        showEmailErr(REGISTER_ERRORS.emailErr);
      }
    }
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
  logInUser
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

    const token = res.result;
    const username = res.username;
    const id = res.id;
    const email = res.email;

    let authData = {
      token,
      username,
      id,
      email,
    };

    logInUser(authData);

    navigate("/");
  } catch (error) {
    console.log(error);
    navigate("/404");
  }
};

//----Validator functions-----

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
