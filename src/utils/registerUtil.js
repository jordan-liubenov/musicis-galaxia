const ERROR_MSGS = {
  email: <div className="errorDiv">Email invalid.</div>,
  user: <div className="errorDiv">Should be atleast 6 characters long.</div>,
  pass: <div className="errorDiv">Should be atleast 8 characters long.</div>,
  passUpper: <div className="errorDiv">No uppercase character.</div>,
  passNumber: <div className="errorDiv">No number/s.</div>,
  rePass: <div className="errorDiv">Password does not match!</div>,
};

export const toggleState = (state, stateFunc) => {
  stateFunc((state) => !state); //take the current value of state and set is as its opossite
};

const checkForUppercase = (string) => {
  //checks if password has atleast 1 uppercase char
  let hasUpper = false;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == string.charAt(i).toUpperCase()) {
      hasUpper = true;
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
  let isValid = false;
  if (email.length > 0) {
    if (!email.includes("@") || !email.includes(".")) {
      return isValid;
    }
  }
  return true;
};

const validateUsername = (username, setUser) => {
  let isValid = false;
  if (username.length < 6 && username.length > 0) {
    setUser(ERROR_MSGS.user);
    isValid = false;
    return isValid;
  } else {
    setUser("");
    isValid = true;
    return isValid;
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

const validateRePass = (value, initialPassword, passErr) => {
  if (value.length > 0) {
    if (value != initialPassword) {
      passErr(ERROR_MSGS.rePass);
      return;
    } else {
      passErr("");
      return;
    }
  } else {
    passErr("");
  }
};

//handle, validate & set each field's value before it gets sent in request
//TO-DO: Disable button unless all fields have been successfully validated
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

  //find which element this function is being run on and run validation function

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
      validateRePass(value, passwordValue, passErr);
      break;
  }

  setFunc(value);
};
