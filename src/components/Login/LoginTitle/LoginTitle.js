import "../LoginTitle/LoginTitle.css";

const LoginTitle = (props) => {
  return (
    <div className="loginTitleDiv">
      <span className="loginTitleSpan">{props.title}</span>
    </div>
  );
};

export default LoginTitle;
