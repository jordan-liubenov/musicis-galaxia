import "../Login/Login.css";

import { displayUnderscore } from "../../utils/homeUtil";
import { useState } from "react";
import { handleValue } from "../../utils/loginUtil";
import { submitLogin } from "../../services/userService";

//TODO add "not registered yet? redirect button to bottom of form"

const Login = () => {
  const [underscore, setUnderscore] = useState(false);
  displayUnderscore(underscore, setUnderscore);
  let title = underscore ? "Login_" : "Login";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="loginContainer">
      <div className="loginTitleDiv">
        <span className="loginTitleSpan">{title}</span>
      </div>
      <div className="loginFormDiv">
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Username123"
            name="user"
            id="user"
            value={username}
            onChange={(e) => handleValue(e, setUsername)}
            required
          ></input>
          <br></br>
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            placeholder="******"
            name="pass"
            id="pass"
            value={password}
            onChange={(e) => handleValue(e, setPassword)}
            required
          ></input>
          <br></br>
          <button
            type="submit"
            className="loginBtn"
            onClick={(e) => submitLogin(e, username, password)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
