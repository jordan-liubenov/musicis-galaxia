import { useEffect, useState } from "react";
import "../styles/Register.css";
import { displayUnderscore } from "../utils/homeUtil";

import {
  setValue,
  submitRegister,
  toggleState,
  validateUsername,
} from "../utils/registerUtil";

import Footer from "./Footer.js";
import RegisterInfo from "./RegisterInfo.js";

const Register = () => {
  const [info, showInfo] = useState(true); //info box will be displayed by default

  const [underscore, setUnderscore] = useState(false);
  displayUnderscore(underscore, setUnderscore);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const [rePassword, setRePass] = useState("");

  return (
    <div className="registerContainer">
      <div className="regTitleDiv">
        {underscore ? (
          <span className="regTitleSpan">Register_</span>
        ) : (
          <span className="regTitleSpan">Register</span>
        )}
      </div>
      <div className="registerFormDiv">
        <form method="POST" action="http://localhost:5000/register">
          <label htmlFor="email" id="email">
            Email:
          </label>
          <input
            type="text"
            placeholder="example@domain.com"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setValue(e, setEmail)}
            required
          ></input>
          <br></br>
          <label htmlFor="username" id="username">
            Username:
            <div className="errorDiv">Username error</div>
          </label>
          <input
            minLength={6}
            type="text"
            placeholder="Username123"
            name="user"
            id="user"
            value={username}
            onChange={(e) => setValue(e, setUsername)}
            required
          ></input>
          <br></br>
          <label htmlFor="pass" id="password">
            Password:
          </label>
          <input
            type="password"
            placeholder="******"
            name="pass"
            id="pass"
            value={password}
            onChange={(e) => setValue(e, setPass)}
            required
          ></input>
          <br></br>
          <label htmlFor="rePass" id="rePass">
            Repeat Password:
          </label>
          <input
            type="password"
            placeholder="******"
            name="rePass"
            id="rePass"
            value={rePassword}
            onChange={(e) => setValue(e, setRePass)}
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
{
  /* <Footer /> */
}

export default Register;
