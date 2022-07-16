const RePassField = (props) => {
  return (
    <>
      <label htmlFor="rePass" id="rePass">
        Repeat Password:
      </label>
      <input
        type="password"
        placeholder="******"
        name="rePass"
        id="rePass"
        value={props.rePassword}
        onChange={props.handleRePass}
        required
      ></input>
    </>
  );
};

export default RePassField;
