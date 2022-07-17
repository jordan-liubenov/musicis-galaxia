import "../PostOfferTitle/PostOfferTitle.css";

const PostOfferTitle = (props) => {
  return (
    <div classname="postTitleDiv">
      <span className="postTitleSpan">{props.title}</span>
    </div>
  );
};

export default PostOfferTitle;
