import "../DescriptionField/DescriptionField.css";

const DescriptionField = (props) => {
  return (
    <>
      <div>
        <label htmlFor="description" id="description">
          Description:
        </label>
        <input
          className="description"
          type="text"
          name="description"
          id="description"
          value={props.description}
          onChange={(e) => props.handleDescriptionField(e)}
          required
        ></input>
      </div>
    </>
  );
};

export default DescriptionField;
