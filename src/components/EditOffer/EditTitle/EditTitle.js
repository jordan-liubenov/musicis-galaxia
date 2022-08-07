import "../EditTitle/EditTitle.css";

const EditTitle = (props) => {
  return (
    <div className="editTitleDiv">
      <span className="editTitleSpan">{props.title}</span>
    </div>
  );
};

export default EditTitle;
