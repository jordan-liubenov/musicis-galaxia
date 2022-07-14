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

export const submitLogin = async (e, user, pass) => {
  e.preventDefault();

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
    sessionStorage.setItem("token", res.token);
  } catch (error) {
    console.log(error);
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
