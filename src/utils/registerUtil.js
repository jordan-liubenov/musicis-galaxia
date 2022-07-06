const ERROR_MSGS = {
  email: <div className="errorDiv">Email invalid.</div>,
  user: <div className="errorDiv">Shorter than 6 characters.</div>,
  pass: <div className="errorDiv">Password less than 8 characters.</div>,
  passUpper: <div className="errorDiv">No uppercase character.</div>,
  passNumber: <div className="errorDiv">No number/s.</div>,
  rePass: <div className="errorDiv">Passwords don't match.</div>,
};

export const toggleState = (state, stateFunc) => {
  stateFunc((state) => !state); //take the current value of state and set is as its opossite
};

const checkForUppercase = (string) => {
  //checks for uppercase chars in password
  let hasUpper = false;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == string.charAt(i).toUpperCase()) {
      return true;
    }
  }
  return hasUpper;
};

const checkForNumber = (string) => {
  //check if password has atleast 1 number
  let hasNum = false;
  for (let i = 0; i < string.length; i++) {
    let current = string.charAt(i);
    if (Number(current)) {
      hasNum = true;
    }
  }
  return hasNum;
};

const validateEmail = (email) => {
  if (email.length > 0) {
    if (!email.includes("@") || !email.includes(".")) {
      return false;
    }
  }
  return true;
};

const validateUsername = (username, setUser) => {
  if (username.length < 6 && username.length > 0) {
    setUser(ERROR_MSGS.user);
    return;
  } else {
    setUser("");
  }
};

const validatePassword = (password, passErr) => {
  if (password.length > 0) {
    if (password.length < 8) {
      passErr(ERROR_MSGS.pass);
      return;
    } else {
      passErr("");
    }
    if (!checkForUppercase(password)) {
      passErr(ERROR_MSGS.passUpper);
      return;
    } else {
      passErr("");
    }
    if (!checkForNumber(password)) {
      passErr(ERROR_MSGS.passNumber);
      return;
    } else {
      passErr("");
    }
  } else {
    passErr("");
    return;
  }
};

const validateRePass = (value, initialPassword, setRePass) => {
  if (value.length > 0) {
    if (value != initialPassword) {
      setRePass(ERROR_MSGS.rePass);
      return;
    } else {
      setRePass("");
      return;
    }
  } else {
    setRePass("");
  }
};

export const handleValue = (
  e,
  setFunc,
  emailErr,
  usernameErr,
  passErr,
  rePassErr,
  passwordValue
) => {
  const { id, value } = e.target;

  //find which element this function is being run on
  switch (id) {
    case "email":
      if (!validateEmail(value)) {
        emailErr(ERROR_MSGS.email);
      } else {
        emailErr("");
      }
      break;

    case "user":
      validateUsername(value, usernameErr);
      break;

    case "pass":
      validatePassword(value, passErr);
      break;

    case "rePass":
      validateRePass(value, passwordValue, rePassErr);
      break;
  }

  setFunc(value);
};

export const submitRegister = async (e, email, username, password, rePass) => {
  try {
    const req = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
};
