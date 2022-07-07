const RegisterBtn = (props) => {
  //props is the submitRegster() function

  return (
    <button type="submit" className="submitBtn" onClick={props.submitRegister}>
      Register
    </button>
  );
};

export default RegisterBtn; 
