import { useState } from "react";
import { displayUnderscore } from "../../utils/homeUtil";

import "../PostOffer/PostOffer.css";

//child component imports
import PostOfferTitle from "./PostOfferTitle/PostOfferTitle";

const PostOffer = () => {
  const [underscore, setUnderscore] = useState(false);
  displayUnderscore(underscore, setUnderscore);

  let title = underscore ? "Post New Offer_" : "Post New Offer";

  return (
    <div className="postContainer">
      <PostOfferTitle title={title} />
      <div className="postFormDiv">
        <form method="POST" action="http://localhost:5000/post"></form>
      </div>
    </div>
  );
};

export default PostOffer;
