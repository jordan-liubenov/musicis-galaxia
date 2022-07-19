import "../PostOfferTitle/PostOfferTitle.css";

const PostOfferTitle = (props) => {
  return (
    <div className="postTitleDiv">
      <span className="postTitleSpan">{props.title}</span>
    </div>
  );
};

export default PostOfferTitle;
