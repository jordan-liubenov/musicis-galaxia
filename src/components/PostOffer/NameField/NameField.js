import "../NameField/NameField.css";

const NameField = (props) => {
  return (
    <>
      <label htmlFor="productName">Product Name:</label>
      {props.nameErr}
      <input
        className="nameField"
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
