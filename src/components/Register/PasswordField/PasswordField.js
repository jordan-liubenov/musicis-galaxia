const PasswordField = (props) => {
  return (
    <>
      <label htmlFor="pass">
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
