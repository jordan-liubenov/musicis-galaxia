import "../Login/Login.css";

import { displayUnderscore } from "../../utils/homeUtil";
import { useState } from "react";
import { handleValue } from "../../utils/loginUtil";
import { submitLogin } from "../../services/userService";

import UsernameField from "./UsernameField";
import PasswordField from "./PasswordField";
import LoginBtn from "./LoginBtn";


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
          <UsernameField
            username={username}
            handleValue={(e) => handleValue(e, setUsername)}
          />
          <br></br>
          <PasswordField
            password={password}
            handleValue={(e) => handleValue(e, setPassword)}
          />
          <br></br>
          <LoginBtn
            submitLogin={(e) => {
              submitLogin(e, username, password);
            }}
          />
        </form>
      </div>
    </div>
  );
};
export default Login;
