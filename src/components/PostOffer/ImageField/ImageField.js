const ImageField = (props) => {
  return (
    <>
      <label htmlFor="imageField">Image URL:</label>
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
