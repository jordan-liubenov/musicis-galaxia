import { useState } from "react";
import "../styles/Register.css";
import { displayUnderscore } from "../utils/homeUtil";

import { infoStatus, toggleState } from "../utils/registerUtil";

import Footer from "./Footer.js";
import RegisterInfo from "./RegisterInfo.js";

const Register = () => {
  const [info, showInfo] = useState(false); //info box will be hidden by default

  const [underscore, setUnderscore] = useState(false);

  displayUnderscore(underscore, setUnderscore);

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
        <form method="POST">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            placeholder="example@domain.com"
            name="email"
            id="email"
            required
          ></input>
          <br></br>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Username123"
            name="user"
            id="user"
            required
          ></input>
          <br></br>
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            placeholder="******"
            name="pass"
            id="pass"
            required
          ></input>
          <br></br>
          <label htmlFor="rePass">Repeat Password:</label>
          <input
            type="password"
            placeholder="******"
            name="rePass"
            id="rePass"
            required
          ></input>
          <br></br>
          <button type="submit" className="submitBtn">
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
      <Footer />
    </div>
  );
};

export default Register;
