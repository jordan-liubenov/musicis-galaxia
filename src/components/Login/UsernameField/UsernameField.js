const UsernameField = (props) => {
  return (
    <>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        placeholder="Username123"
        name="user"
        id="user"
        value={props.username}
        onChange={props.handleValue}
        required
      ></input>
    </>
  );
};

export default UsernameField;
