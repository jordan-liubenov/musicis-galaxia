import "../Login/Login.css";

import { displayUnderscore } from "../../utils/homeUtil";
import { useState } from "react";
import { ERROR_MSGS, handleValue } from "../../utils/loginUtil";
import { submitLogin } from "../../services/userService";
import { useNavigate } from "react-router-dom";

//child component imports
import UsernameField from "./UsernameField/UsernameField";
import PasswordField from "./PasswordField/PasswordField";
import LoginBtn from "./LoginBtn/LoginBtn";
import LoginTitle from "./LoginTitle/LoginTitle";
import Footer from "../Footer/Footer";

const Login = (props) => {
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
    <>
      {" "}
      <div className="loginContainer">
        <LoginTitle title={title} />
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
                  showUserErr,
                  props.authenticateUser
                );
              }}
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Login;
