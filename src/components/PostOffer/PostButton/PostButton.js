import { createPost } from "../../../services/postService";
import "../PostButton/PostButton.css";
const PostButton = (props) => {
  return (
    <>
      <button
        type="submit"
        className="postOfferButton"
        onClick={(e) => createPost(e, props)}
      >
        Create Offer
      </button>
    </>
  );
};

export default PostButton;
