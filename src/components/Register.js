import { useEffect, useState } from "react";
import "../styles/Register.css";

import { displayUnderscore } from "../utils/homeUtil";
import { submitRegister } from "../services/userService";
import { handleValue, toggleState } from "../utils/registerUtil";

import RegisterInfo from "./RegisterInfo.js";
import RegisterBtn from "./RegisterBtn";

const Register = () => {
  const [info, showInfo] = useState(true); //info box will be displayed by default

  const [underscore, setUnderscore] = useState(false);
  displayUnderscore(underscore, setUnderscore);

  //form input field values
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const [rePassword, setRePass] = useState("");

  //error message which will be displaid upon validation
  const [emailError, showEmailErr] = useState("");
  const [usernameError, showUsernameErr] = useState("");
  const [passError, showPassErr] = useState("");
  const [rePassError, showrePassErr] = useState("");

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
            {emailError}
          </label>
          <input
            type="text"
            placeholder="example@domain.com"
            name="email"
            id="email"
            value={email}
            onChange={(e) =>
              handleValue(
                e,
                setEmail,
                showEmailErr,
                showUsernameErr,
                showPassErr,
                showrePassErr
              )
            }
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
            onChange={(e) =>
              handleValue(
                e,
                setUsername,
                showEmailErr,
                showUsernameErr,
                showPassErr,
                showrePassErr
              )
            }
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
            onChange={(e) =>
              handleValue(
                e,
                setPass,
                showEmailErr,
                showUsernameErr,
                showPassErr,
                showrePassErr
              )
            }
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
            onChange={(e) =>
              handleValue(
                e,
                setRePass,
                showEmailErr,
                showUsernameErr,
                showPassErr,
                showrePassErr,
                password
              )
            }
            required
          ></input>
          <br></br>

          <RegisterBtn
            submitRegister={(e) =>
              submitRegister(
                e,
                email,
                username,
                password,
                rePassword,
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

// <button
//             type="submit"
//             className="submitBtn"
//             onClick={(e) =>
//               submitRegister(e, email, username, password, rePassword)
//             }
//           >
//             Register
//           </button>
