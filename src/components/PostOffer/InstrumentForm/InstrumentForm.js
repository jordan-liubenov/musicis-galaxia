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

const InstrumentForm = () => {
  const [productName, setProductName] = useState("");

  const [condition, setCondition] = useState("regular");

  const [description, setDescription] = useState("");

  const [price, setPrice] = useState("");

  const [imageUrl, setImageUrl] = useState("");
  return (
    <form
      method="POST"
      action="http://localhost:5000/post"
      className="instrumentForm"
    >
      <NameField
        productName={productName}
        handleNameField={(e) => handleNameField(e, setProductName)}
      />
      <DescriptionField
        description={description}
        handleDescriptionField={(e) =>
          handleDescriptionField(e, setDescription)
        }
      />
      <ConditionRadio handleRadio={handleRadio} setCondition={setCondition} />
      <br></br>
      <ImageField
        imageUrl={imageUrl}
        handleImageUrlField={(e) => handleImageUrlField(e, setImageUrl)}
      />
      <PriceField
        price={price}
        handlePriceField={(e) => handlePriceField(e, setPrice)}
      />
      <PostButton />
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
