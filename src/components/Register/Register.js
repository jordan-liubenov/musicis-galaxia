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
import RegisterInfo from "./RegisterInfo";
import RegisterBtn from "./RegisterBtn";
import EmailField from "./EmailField";
import UsernameField from "./UsernameField";
import PasswordField from "./PasswordField";
import RePassField from "./RePassField";

//TODO add "already registered?-login redirect button on form"

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

  //error messages which will be displayed upon validation
  const [emailError, showEmailErr] = useState("");
  const [usernameError, showUsernameErr] = useState("");
  const [passError, showPassErr] = useState("");

  return (
    <div className="registerContainer">
      <div className="regTitleDiv">
        <span className="regTitleSpan">{title}</span>
      </div>
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
              submitRegister(e, email, username, password, rePassword)
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

// <button
//             type="submit"
//             className="submitBtn"
//             onClick={(e) =>
//               submitRegister(e, email, username, password, rePassword)
//             }
//           >
//             Register
//           </button>
