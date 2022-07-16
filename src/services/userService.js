import {
  checkForNumber,
  checkForUppercase,
  validateEmail,
} from "../utils/registerUtil";

export const submitRegister = async (e, email, user, pass, rePass) => {
  e.preventDefault();

  const isValid = validator(email, user, pass, rePass);
  if (!isValid) {
    return; //guard clause incase any of the fields are invalid
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
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const submitLogin = async (
  e,
  user,
  pass,
  navigate,
  showPassErr,
  showUserErr
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

    navigate("/");
  } catch (error) {
    console.log(error);
    //TODO add redirect to 404 incase of something going wrong
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

// useEffect(() => {  request testing
//   fetch(`http://localhost:5000`)
//     .then((res) => res.text())
//     .then((result) => {
//       console.log(result);
//     });
// }, []);
