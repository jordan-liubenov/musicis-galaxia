import { useNavigate } from "react-router-dom";
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

//child component imports
import RegisterInfo from "./RegisterInfo/RegisterInfo";
import RegisterBtn from "./RegisterBtn/RegisterBtn";
import EmailField from "./EmailField/EmailField";
import UsernameField from "./UsernameField/UsernameField";
import PasswordField from "./PasswordField/PasswordField";
import RePassField from "./RePassField/RePassField";
import RegisterTitle from "./RegisterTitle/RegisterTitle";

const Register = () => {
  const navigation = useNavigate();

  const [info, showInfo] = useState(true); //info box will be displayed by default

  const [underscore, setUnderscore] = useState(false);
  displayUnderscore(underscore, setUnderscore);
  let title = underscore ? "Register_" : "Register";

  //form input field values
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const [rePassword, setRePass] = useState("");

  //error messages which will be displayed upon validation
  const [emailError, showEmailErr] = useState("");
  const [usernameError, showUsernameErr] = useState("");
  const [passError, showPassErr] = useState("");

  return (
    <div className="registerContainer">
      <RegisterTitle title={title}/>
      <div className="registerFormDiv">
        <form method="POST" action="http://localhost:5000/register">
          <EmailField
            handleEmail={(e) => handleEmail(e, setEmail, showEmailErr)}
            emailError={emailError}
          />
          <br></br>
          <UsernameField
            handleUsername={(e) =>
              handleUsername(e, setUsername, showUsernameErr)
            }
            usernameError={usernameError}
          />
          <br></br>
          <PasswordField
            handlePassword={(e) => handlePassword(e, setPass, showPassErr)}
            passError={passError}
          />
          <br></br>
          <RePassField
            handleRePass={(e) =>
              handleRePass(e, setRePass, showPassErr, password)
            }
            passError={passError}
          />
          <br></br>
          <RegisterBtn
            submitRegister={(e) =>
              submitRegister(
                e,
                email,
                username,
                password,
                rePassword,
                navigation
              )
            }
          />
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
