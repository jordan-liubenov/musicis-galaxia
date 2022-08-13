import { useState } from "react";
import { displayUnderscore } from "../../utils/homeUtil";
import { handleRadio, setFormType } from "../../utils/postUtil";

import "../PostOffer/PostOffer.css";

//child component imports
import PostOfferTitle from "./PostOfferTitle/PostOfferTitle";
import RadioButtons from "./RadioButtons/RadioButtons";

const PostOffer = () => {
  const [underscore, setUnderscore] = useState(false);
  displayUnderscore(underscore, setUnderscore);

  let title = underscore ? "Post New Offer_" : "Post New Offer";

  //state that determines the type of form to be rendered
  const [productType, setProductType] = useState("instrument"); //display instrument form by default

  //sets the form-to-be rendered based on the currently selected productType
  let form = setFormType(productType);

  return (
    <div className="postContainer">
      <PostOfferTitle title={title} />
      <div className="postFormDiv">
        <div>
          <RadioButtons
            handleRadio={handleRadio}
            setProductType={setProductType}
          />
          <br></br>
          {form}
        </div>
      </div>
    </div>
  );
};

export default PostOffer;
