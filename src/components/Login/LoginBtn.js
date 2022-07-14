import { Link } from "react-router-dom";

const LoginBtn = (props) => {
  return (
    <div>
      <button type="submit" className="loginBtn" onClick={props.submitLogin}>
        Login
      </button>
      <p className="regRedirect">
        {" "}
        Not registered yet? Register{" "}
        <Link className="regLink" to={"/register"}>
          here
        </Link>
        .
      </p>
    </div>
  );
};

export default LoginBtn;
