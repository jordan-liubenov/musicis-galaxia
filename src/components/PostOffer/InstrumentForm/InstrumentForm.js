import { useState } from "react";
import {
  handleDescriptionField,
  handleNameField,
  handleRadio,
} from "../../../utils/postUtil";

//child component imports
import NameField from "../NameField/NameField";
import ConditionDropdown from "../ConditionDropdown/ConditionDropdown";
import DescriptionField from "../DescriptionField/DescriptionField";

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

      <DescriptionField
        description={description}
        handleDescriptionField={(e) =>
          handleDescriptionField(e, setDescription)
        }
      />

      <ConditionDropdown
        handleRadio={handleRadio}
        setCondition={setCondition}
      />
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
