import "../RegisterTitle/RegisterTitle.css";

const RegisterTitle = (props) => {
  return (
    <div className="regTitleDiv">
      <span className="regTitleSpan">{props.title}</span>
    </div>
  );
};

export default RegisterTitle;
