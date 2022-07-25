import { useState } from "react";
import {
  handleDescriptionField,
  handleImageUrlField,
  handleNameField,
  handlePriceField,
} from "../../../utils/postUtil";

//child component imports
import ImageField from "../ImageField/ImageField";
import NameField from "../NameField/NameField";
import PriceField from "../PriceField/PriceField";
import DescriptionField from "../DescriptionField/DescriptionField";
import PostButton from "../PostButton/PostButton";

const OtherForm = () => {
  //fields
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");

  //field errors
  const [nameErr, setNameErr] = useState("");
  const [descriptionErr, setDescriptionErr] = useState("");
  const [imageErr, setImageErr] = useState("");
  const [priceErr, setPriceErr] = useState("");

  const toPost = {
    otherForm: true,
    productName,
    description,
    imageUrl,
    price,
  };

  return (
    <form method="POST" action="http://localhost:5000/post">
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
      <ImageField
        imageUrl={imageUrl}
        handleImageUrlField={(e) =>
          handleImageUrlField(e, setImageUrl, setImageErr)
        }
        imageErr={imageErr}
      />

      <PriceField
        price={price}
        handlePriceField={(e) => handlePriceField(e, setPrice, setPriceErr)}
        priceErr={priceErr}
      />
      <br></br>
      <PostButton toPost={toPost} />
    </form>
  );
};
export default OtherForm;
/*
=== Structure ===  
  -Name of product
  -Description of product
  -Image
  -Price 
*/