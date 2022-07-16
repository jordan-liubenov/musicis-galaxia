import { Link } from "react-router-dom";

import "../RegisterBtn/RegisterBtn.css";

const RegisterBtn = (props) => {
  return (
    <div>
      <button
        type="submit"
        className="submitBtn"
        onClick={props.submitRegister}
      >
        Register
      </button>
      <p className="logRedirect">
        Already registered? Log in{" "}
        <Link className="logLink" to={"/login"}>
          {" "}
          here
        </Link>
        .
      </p>
    </div>
  );
};

export default RegisterBtn;
