import "../styles/Login.css";
import Footer from "./Footer";

import { displayUnderscore } from "../utils/homeUtil";
import { useState } from "react";

const Login = () => {
  const [underscore, setUnderscore] = useState(false);

  displayUnderscore(underscore, setUnderscore);

  return (
    <div className="loginContainer">
      <div className="loginTitleDiv">
        {underscore ? (
          <span className="loginTitleSpan">Login_</span>
        ) : (
          <span className="loginTitleSpan">Login</span>
        )}
      </div>
      <div className="loginFormDiv">
        <form>
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
          <button type="submit" className="loginBtn">
            Login
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
