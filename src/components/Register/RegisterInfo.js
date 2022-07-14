import "../Register/RegisterInfo.css";

const RegisterInfo = () => {
  return (
    <div className="info">
      <ul>
        <br></br>
        <li>Email needs to be valid.</li>
        <br></br>
        <li>Username needs to be atleast 6 characters long.</li>
        <br></br>
        <li>
          Password needs to have atleast one Uppercase character, one Number and
          a minimum length of 8 characters.
        </li>
        <br></br>
        <li>Passwords need to match.</li>
      </ul>
    </div>
  );
};

export default RegisterInfo;
