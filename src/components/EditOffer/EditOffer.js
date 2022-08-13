import { useContext } from "react";
import { useEffect, useState } from "react";

import { CurrentOfferContext } from "../../context/CurrentOfferContext";

import { fetchEntryById } from "../../services/catalogService";
import { trimIdFromEdit } from "../../utils/detailsUtils";
import { displayUnderscore } from "../../utils/homeUtil";

import "../EditOffer/EditOffer.css";

import InstrumentForm from "../PostOffer/InstrumentForm/InstrumentForm";
import OtherForm from "../PostOffer/OtherForm/OtherForm";
import AmplifierForm from "../PostOffer/AmplifierForm/AmplifierForm";

import EditTitle from "./EditTitle/EditTitle";

const EditOffer = () => {
  //stores the currently opened offer which will be edited
  const { currentOpenOffer } = useContext(CurrentOfferContext);

  const [underscore, setUnderscore] = useState(false);
  displayUnderscore(underscore, setUnderscore);
  let title = underscore ? "Edit_" : "Edit";

  let formToRender;
  //check what the type of offer is of the currently openned offer and render the correct form
  if (currentOpenOffer.type == "Instrument")
    formToRender = <InstrumentForm currentOpenOffer={currentOpenOffer} />;
  if (currentOpenOffer.type == "Amplifier")
    formToRender = <AmplifierForm currentOpenOffer={currentOpenOffer} />;
  if (currentOpenOffer.type == "Other")
    formToRender = <OtherForm currentOpenOffer={currentOpenOffer} />;

  return (
    <div className="editFormContainer">
      <EditTitle title={title} />
      <div className="postFormDiv">{formToRender}</div>
    </div>
  );
};

export default EditOffer;
