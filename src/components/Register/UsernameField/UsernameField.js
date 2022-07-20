const UsernameField = (props) => {
  return (
    <>
      <label htmlFor="username">
        Username:
        {props.usernameError}
      </label>
      <input
        minLength={6}
        type="text"
        placeholder="Username123"
        name="user"
        id="user"
        value={props.username}
        onChange={props.handleUsername}
        required
      ></input>
    </>
  );
};

export default UsernameField;
