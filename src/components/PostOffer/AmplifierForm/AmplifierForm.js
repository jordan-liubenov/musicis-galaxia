import { useState } from "react";
import {
  handleImageUrlField,
  handleNameField,
  handlePriceField,
  handleRadio,
  handleWattageField,
} from "../../../utils/postUtil";
import ConditionRadio from "../ConditionRadio/ConditionRadio";
import ImageField from "../ImageField/ImageField";

//child component imports
import NameField from "../NameField/NameField";
import PostButton from "../PostButton/PostButton";
import PriceField from "../PriceField/PriceField";
import ValveRadio from "./ValveField/ValveRadio";
import WattageField from "./WattageField/WattageField";

const AmplifierForm = (props) => {
  //fields
  //if props.currentOpenOffer is NOT undefined
  //that means that the client is currently in the Edit form which was opened
  //through the details view where the props.currentOpenOffer is saved in context

  const [productName, setProductName] = useState(
    props.currentOpenOffer ? props.currentOpenOffer.productName : ""
  );
  const [wattage, setWattage] = useState(
    props.currentOpenOffer ? Number(props.currentOpenOffer.wattage) : 0
  );
  const [condition, setCondition] = useState("regular");
  const [valves, setValves] = useState("yes");
  const [imageUrl, setImageUrl] = useState(
    props.currentOpenOffer ? props.currentOpenOffer.imageUrl : ""
  );
  const [price, setPrice] = useState(
    props.currentOpenOffer ? Number(props.currentOpenOffer.price) : 0
  );

  //field errors
  const [nameErr, setNameErr] = useState("");
  const [wattageErr, setWattageErr] = useState("");
  const [priceErr, setPriceErr] = useState("");
  const [imageErr, setImageErr] = useState("");

  const toPost = {
    //ownerId
    ampForm: true,
    productName,
    wattage,
    condition,
    valves,
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
      <WattageField
        wattage={wattage}
        handleWattageField={(e) =>
          handleWattageField(e, setWattage, setWattageErr)
        }
        wattageErr={wattageErr}
      />
      <br></br>
      <ConditionRadio
        currentOffer={props.currentOpenOffer}
        condition={condition}
        handleRadio={handleRadio}
        setCondition={setCondition}
      />
      <br></br>
      <ValveRadio
        currentOffer={props.currentOpenOffer}
        valves={valves}
        handleRadio={handleRadio}
        setValves={setValves}
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
        handlePriceField={(e) =>
          handlePriceField(e, setPrice, setPriceErr, props.currentOpenOffer)
        }
        priceErr={priceErr}
      />
      <PostButton toPost={toPost} currentOffer={props.currentOpenOffer} />
    </form>
  );
};
export default AmplifierForm;

/*
=== Structure ===
  -Model/Name
  -Wattage
  -Condition
  -Valves 
  -Image
  -Price
*/
