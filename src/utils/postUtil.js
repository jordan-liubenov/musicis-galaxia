import AmplifierForm from "../components/PostOffer/AmplifierForm/AmplifierForm";
import InstrumentForm from "../components/PostOffer/InstrumentForm/InstrumentForm";
import OtherForm from "../components/PostOffer/OtherForm/OtherForm";

const POST_ERROR_MSGS = {
  nameErr: <div className="errorDiv">Should be atleast 6 characters long.</div>,
  descriptionErr: (
    <div className="errorDiv">Should be atleast 12 characters long.</div>
  ),
  imgErr: <div className="errorDiv">Image URL needs to start with http/s.</div>,
  priceErr: <div className="errorDiv">Price must be a positive number.</div>,
  wattageErr: (
    <div className="errorDiv">Wattage must be a positive number.</div>
  ),
};

//radio button handler
export const handleRadio = (setFunc, str) => {
  setFunc(str);
};

//input field handlers
export const validateName = (str, setError) => {
  if (str.length < 5 && str.length > 0) {
    setError(POST_ERROR_MSGS.nameErr);
    return false;
  } else if (str.length == 0) {
    setError("");
    return true;
  } else {
    setError("");
    return true;
  }
};
export const handleNameField = (e, setFunc, setError) => {
  const { value } = e.target;
  validateName(value, setError);
  setFunc(value);
};

 const validateDescription = (str, setError) => {
  if (str.length < 8 && str.length > 0) {
    setError(POST_ERROR_MSGS.descriptionErr);
    return false;
  } else {
    setError("");
    return true;
  }
};
export const handleDescriptionField = (e, setFunc, setError) => {
  const { value } = e.target;
  validateDescription(value, setError);
  setFunc(value);
};

 const validatePrice = (num, setError) => {
  num = Number(num);
  if (num < 0) {
    setError(POST_ERROR_MSGS.priceErr);
    return false;
  } else {
    setError("");
    return true;
  }
};
export const handlePriceField = (e, setFunc, setError) => {
  const { value } = e.target;
  validatePrice(value, setError);
  setFunc(value);
};

 const validateImageField = (str, setError) => {
  if (str.length > 0) {
    if (str.startsWith("http")) {
      setError("");
      return true;
    } else {
      setError(POST_ERROR_MSGS.imgErr);
      return false;
    }
  } else {
    setError("");
    return true;
  }
};
export const handleImageUrlField = (e, setFunc, setError) => {
  const { value } = e.target;
  validateImageField(value, setError);
  setFunc(value);
};

 const validateWattage = (num, setError) => {
  num = Number(num);
  if (num < 0) {
    setError(POST_ERROR_MSGS.wattageErr);
    return false;
  } else {
    setError("");
    return true;
  }
};
export const handleWattageField = (e, setFunc, setError) => {
  const { value } = e.target;
  validateWattage(value, setError);
  setFunc(value);
};

export const setFormType = (type) => {
  if (type == "instrument") return <InstrumentForm />;
  if (type == "amp") return <AmplifierForm />;
  if (type == "other") return <OtherForm />;
};
