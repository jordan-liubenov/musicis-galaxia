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

export const checkForUppercase = (string) => {
  //checks if password has atleast 1 uppercase char
  let hasUpper = false;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == string.charAt(i).toUpperCase()) {
      hasUpper = true;
    }
  }
  return hasUpper;
};

export const checkForNumber = (string) => {
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

export const validateEmail = (email) => {
  let isValid = false;

  let reg = /^[A-Za-z\d]+[@][A-Za-z]+\.[a-z]+$/g;
  if (email.length > 0) {
    if (reg.test(email)) {
      isValid = true;
    } else {
      isValid = false;
    }
  } else if (email.length == 0) isValid = true;
  return isValid;
};

const validateUsername = (username, setUser) => {
  let isValid = false;
  if (username.length < 6 && username.length > 0) {
    setUser(ERROR_MSGS.user);
    isValid = false;
  } else {
    setUser("");
    isValid = true;
  }
  return isValid;
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

//field value and error handlers:

export const handleEmail = (e, setFunc, emailErr) => {
  const { value } = e.target;
  if (!validateEmail(value)) {
    emailErr(ERROR_MSGS.email);
  } else {
    emailErr("");
  }

  setFunc(value);
};

export const handleUsername = (e, setFunc, usernameErr) => {
  const { value } = e.target;
  validateUsername(value, usernameErr);
  setFunc(value);
};

export const handlePassword = (e, setFunc, passErr) => {
  const { value } = e.target;
  validatePassword(value, passErr);
  setFunc(value);
};

export const handleRePass = (e, setFunc, showrePassErr, initialPass) => {
  const { value } = e.target;
  validateRePass(value, initialPass, showrePassErr);
  setFunc(value);
};
