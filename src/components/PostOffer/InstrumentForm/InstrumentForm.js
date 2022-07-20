import { useState } from "react";
import {
  handleDescriptionField,
  handleNameField,
  handleRadio,
} from "../../../utils/postUtil";

//child component imports
import NameField from "../NameField/NameField";
import ConditionRadio from "../ConditionRadio/ConditionRadio";
import DescriptionField from "../DescriptionField/DescriptionField";
import PriceField from "../PriceField/PriceField";

const InstrumentForm = () => {
  const [productName, setProductName] = useState("");

  const [condition, setCondition] = useState("regular");

  const [description, setDescription] = useState("");

  return (
    <form method="POST" action="http://localhost:5000/post">
      <NameField
        productName={productName}
        handleNameField={(e) => handleNameField(e, setProductName)}
      />
      <br></br>
      <DescriptionField
        description={description}
        handleDescriptionField={(e) =>
          handleDescriptionField(e, setDescription)
        }
      />
      <br></br>
      <ConditionRadio handleRadio={handleRadio} setCondition={setCondition} />
      <br></br>
      <PriceField />
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
