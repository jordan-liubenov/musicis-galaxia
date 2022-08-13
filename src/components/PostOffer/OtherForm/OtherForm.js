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

const OtherForm = (props) => {
  //fields
  //if props.currentOpenOffer is NOT undefined
  //that means that the client is currently in the Edit form which was opened
  //through the details view where the props.currentOpenOffer is saved in context

  const [productName, setProductName] = useState(
    props.currentOpenOffer ? props.currentOpenOffer.productName : ""
  );
  const [description, setDescription] = useState(
    props.currentOpenOffer ? props.currentOpenOffer.description : ""
  );
  const [imageUrl, setImageUrl] = useState(
    props.currentOpenOffer ? props.currentOpenOffer.imageUrl : ""
  );
  const [price, setPrice] = useState(
    props.currentOpenOffer ? Number(props.currentOpenOffer.price) : 0
  );

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

  if (props.currentOpenOffer != undefined) {
    //if props.currentOpenOffer exists, it means the client is currently in the Edit form
    //in which case an edit=true flag gets set in the body of the POST request
    //which gets checked and modified in the server
    toPost.edit = true;
    toPost.currentOffer = props.currentOpenOffer;
  }

  return (
    <form>
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
      <PostButton toPost={toPost} currentOffer={props.currentOpenOffer} />
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
