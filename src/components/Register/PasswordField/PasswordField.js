const PasswordField = (props) => {
  return (
    <>
      <label htmlFor="pass" id="password">
        Password:
        {props.passError}
      </label>
      <input
        type="password"
        placeholder="******"
        name="pass"
        id="pass"
        value={props.password}
        onChange={props.handlePassword}
        required
      ></input>
    </>
  );
};

export default PasswordField;
