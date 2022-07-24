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

const AmplifierForm = () => {
  //fields
  const [productName, setProductName] = useState("");
  const [wattage, setWattage] = useState("");
  const [condition, setCondition] = useState("regular");
  const [valves, setValves] = useState("yes");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");

  //field errors
  const [nameErr, setNameErr] = useState("");
  const [wattageErr, setWattageErr] = useState("");
  const [priceErr, setPriceErr] = useState("");
  const [imageErr, setImageErr] = useState("");

  return (
    <form method="POST" action="http://localhost:5000/post">
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
        condition={condition}
        handleRadio={handleRadio}
        setCondition={setCondition}
      />
      <br></br>
      <ValveRadio
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
        handlePriceField={(e) => handlePriceField(e, setPrice, setPriceErr)}
        priceErr={priceErr}
      />
      <PostButton />
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
