import { useState } from "react";

import "../InstrumentForm/InstrumentForm.css";

import {
  handleDescriptionField,
  handleImageUrlField,
  handleNameField,
  handlePriceField,
  handleRadio,
} from "../../../utils/postUtil";

//child component imports
import NameField from "../NameField/NameField";
import ConditionRadio from "../ConditionRadio/ConditionRadio";
import DescriptionField from "../DescriptionField/DescriptionField";
import PriceField from "../PriceField/PriceField";
import ImageField from "../ImageField/ImageField";
import PostButton from "../PostButton/PostButton";

const InstrumentForm = (props) => {
  //fields
  //if props.currentOpenOffer is NOT undefined
  //that means that the client is currently in the Edit form which was opened
  //through the details view where the props.currentOpenOffer is saved in context

  const [productName, setProductName] = useState(
    props.currentOpenOffer ? props.currentOpenOffer.productName : ""
  );
  const [condition, setCondition] = useState(
    props.currentOffer ? props.currentOffer.condition : "regular"
  );
  const [description, setDescription] = useState(
    props.currentOpenOffer ? props.currentOpenOffer.description : ""
  );
  const [price, setPrice] = useState(
    props.currentOpenOffer ? Number(props.currentOpenOffer.price) : 0
  );
  const [imageUrl, setImageUrl] = useState(
    props.currentOpenOffer ? props.currentOpenOffer.imageUrl : ""
  );

  //field errors
  const [nameErr, setNameErr] = useState("");
  const [descriptionErr, setDescriptionErr] = useState("");
  const [imageErr, setImageErr] = useState("");
  const [priceErr, setPriceErr] = useState("");

  const toPost = {
    instrumentForm: true,
    productName,
    description,
    condition,
    imageUrl,
    price,
  };

  if (props.currentOpenOffer != undefined) {
    //if props.currentOpenOffer exists, it means the client is currently in the Edit form
    //in which case an edit=true flag gets set in the body of the POST request
    //which gets checked and modified in the server
    toPost.edit = true;
    toPost.currentOffer = props.currentOpenOffer;
  }

  return (
    <form className="instrumentForm">
      <NameField
        productName={productName}
        handleNameField={(e) => handleNameField(e, setProductName, setNameErr)}
        nameErr={nameErr}
      />
      <br></br>
      <DescriptionField
        description={description}
        handleDescriptionField={(e) =>
          handleDescriptionField(e, setDescription, setDescriptionErr)
        }
        descriptionErr={descriptionErr}
      />
      <ConditionRadio
        currentOffer={props.currentOpenOffer}
        condition={condition}
        handleRadio={handleRadio}
        setCondition={setCondition}
      />
      <br></br>
      <ImageField
        imageUrl={imageUrl}
        handleImageUrlField={(e) =>
          handleImageUrlField(e, setImageUrl, setImageErr)
        }
        imageErr={imageErr}
      />
      <br></br>

      <PriceField
        price={price}
        handlePriceField={(e) => handlePriceField(e, setPrice, setPriceErr)}
        priceErr={priceErr}
      />
      <PostButton toPost={toPost} currentOffer={props.currentOpenOffer} />
    </form>
  );
};

export default InstrumentForm;

/*
=== Structure ===
  -Name,
  -Description
  -Condition,
  -Image
  -Price
*/
