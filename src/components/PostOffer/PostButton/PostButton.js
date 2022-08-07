import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../../services/postService";
import "../PostButton/PostButton.css";

const PostButton = (props) => {
  const navigator = useNavigate();

  return (
    <>
      <button
        type="submit"
        className="postOfferButton"
        onClick={(e) => createPost(e, props, navigator)}
      >
        {props.currentOffer != undefined ? "Update offer" : "Create Offer"}
      </button>
    </>
  );
};

export default PostButton;
