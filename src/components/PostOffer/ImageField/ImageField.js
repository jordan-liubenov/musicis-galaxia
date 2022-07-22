const ImageField = (props) => {
  return (
    <>
      <label htmlFor="imageField">Image URL:</label>
      {props.imageErr}
      <input
        type="text"
        id="imageField"
        name="imageField"
        value={props.imageUrl}
        onChange={props.handleImageUrlField}
        placeholder="http/s..."
      ></input>
    </>
  );
};

export default ImageField;
