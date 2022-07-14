import { useEffect, useState } from "react";
import "../Register/Register.css";

import { displayUnderscore } from "../../utils/homeUtil";
import { submitRegister } from "../../services/userService";
import {
  handleEmail,
  handlePassword,
  handleRePass,
  handleUsername,
  toggleState,
} from "../../utils/registerUtil";

import RegisterInfo from "./RegisterInfo";
import RegisterBtn from "./RegisterBtn";

//TODO abstract component and see if there is a better way to controll input values

const Register = () => {
  const [info, showInfo] = useState(true); //info box will be displayed by default

  const [underscore, setUnderscore] = useState(false);
  displayUnderscore(underscore, setUnderscore);
  let title = underscore ? "Register_" : "Register";

  //form input field values
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const [rePassword, setRePass] = useState("");

  //error message which will be displayed upon validation
  const [emailError, showEmailErr] = useState("");
  const [usernameError, showUsernameErr] = useState("");
  const [passError, showPassErr] = useState("");
  const [rePassError, showrePassErr] = useState("");

  return (
    <div className="registerContainer">
      <div className="regTitleDiv">
        <span className="regTitleSpan">{title}</span>
      </div>
      <div className="registerFormDiv">
        <form method="POST" action="http://localhost:5000/register">
          <label htmlFor="email" id="email">
            Email:
            {emailError}
          </label>
          <input
            type="text"
            placeholder="example@domain.com"
            name="email"
            id="email"
            value={email}
            onChange={(e) => handleEmail(e, setEmail, showEmailErr)}
            required
          ></input>
          <br></br>
          <label htmlFor="username" id="username">
            Username:
            {usernameError}
          </label>
          <input
            minLength={6}
            type="text"
            placeholder="Username123"
            name="user"
            id="user"
            value={username}
            onChange={(e) => handleUsername(e, setUsername, showUsernameErr)}
            required
          ></input>
          <br></br>
          <label htmlFor="pass" id="password">
            Password:
            {passError}
          </label>
          <input
            type="password"
            placeholder="******"
            name="pass"
            id="pass"
            value={password}
            onChange={(e) => handlePassword(e, setPass, showPassErr)}
            required
          ></input>
          <br></br>
          <label htmlFor="rePass" id="rePass">
            Repeat Password:
            {rePassError}
          </label>

          <input
            type="password"
            placeholder="******"
            name="rePass"
            id="rePass"
            value={rePassword}
            onChange={(e) => handleRePass(e, setRePass, showPassErr, password)}
            required
          ></input>
          <br></br>
          <button
            type="submit"
            className="submitBtn"
            onClick={(e) =>
              submitRegister(e, email, username, password, rePassword)
            }
          >
            Register
          </button>
        </form>

        {info ? <RegisterInfo /> : <br></br>}
        <div className="infoBtnDiv">
          <button
            className="infoBtn"
            onClick={() => toggleState(info, showInfo)}
          >
            ?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

// <button
//             type="submit"
//             className="submitBtn"
//             onClick={(e) =>
//               submitRegister(e, email, username, password, rePassword)
//             }
//           >
//             Register
//           </button>
