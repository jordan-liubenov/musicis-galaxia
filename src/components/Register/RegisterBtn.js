const RegisterBtn = (props) => {
  return (
    <button type="submit" className="submitBtn" onClick={props.submitRegister}>
      Register
    </button>
  );
};

export default RegisterBtn;
