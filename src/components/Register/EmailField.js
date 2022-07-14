const EmailField = (props) => {
  return (
    <>
      <label htmlFor="email" id="email">
        Email:
        {props.emailError}
      </label>
      <input
        type="text"
        placeholder="example@domain.com"
        name="email"
        id="email"
        value={props.email}
        onChange={props.handleEmail}
        required
      ></input>
    </>
  );
};

export default EmailField;
