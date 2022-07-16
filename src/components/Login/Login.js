import "../Login/Login.css";

import { displayUnderscore } from "../../utils/homeUtil";
import { useState } from "react";
import { ERROR_MSGS, handleValue } from "../../utils/loginUtil";
import { submitLogin } from "../../services/userService";

import UsernameField from "./UsernameField";
import PasswordField from "./PasswordField";
import LoginBtn from "./LoginBtn";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [underscore, setUnderscore] = useState(false);
  displayUnderscore(underscore, setUnderscore);
  let title = underscore ? "Login_" : "Login";

  //field state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //error state
  const [userErr, showUserErr] = useState(false);
  const [passErr, showPassErr] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="loginContainer">
      <div className="loginTitleDiv">
        <span className="loginTitleSpan">{title}</span>
      </div>
      <div className="loginFormDiv">
        <form method="POST" action="http://localhost:5000/login">
          {userErr ? ERROR_MSGS.username : <></>}
          <UsernameField
            username={username}
            handleValue={(e) => handleValue(e, setUsername)}
          />
          <br></br>
          {passErr ? ERROR_MSGS.password : <></>}
          <PasswordField
            password={password}
            handleValue={(e) => handleValue(e, setPassword)}
          />
          <br></br>
          <LoginBtn
            submitLogin={(e) => {
              submitLogin(
                e,
                username,
                password,
                navigate,
                showPassErr,
                showUserErr
              );
            }}
          />
        </form>
      </div>
    </div>
  );
};
export default Login;
