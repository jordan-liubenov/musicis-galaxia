import "../DescriptionField/DescriptionField.css";

const DescriptionField = (props) => {
  return (
    <>
      <label htmlFor="description" id="description">
        Description:
      </label>
      <div>
        <textarea
          className="description"
          type="text"
          cols={55}
          rows={3}
          name="description"
          id="description"
          value={props.description}
          onChange={(e) => props.handleDescriptionField(e)}
          required
        ></textarea>
      </div>
    </>
  );
};

export default DescriptionField;
