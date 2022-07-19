const NameField = (props) => {
  return (
    <>
      <label htmlFor="productName" id="productName">
        Product Name:
      </label>
      <input
        type="text"
        placeholder="i.e. Gibson Les Paul, 1978"
        name="productName"
        id="productName"
        value={props.productName}
        onChange={props.handleNameField}
        required
      ></input>
    </>
  );
};

export default NameField;
