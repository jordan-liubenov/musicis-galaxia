import InstrumentForm from "../components/PostOffer/InstrumentForm/InstrumentForm";

const POST_ERROR_MSGS = {
  nameErr: <div className="errorDiv">Should be atleast 6 characters long.</div>,
  descriptionErr: (
    <div className="errorDiv">Should be atleast 12 characters long.</div>
  ),
  imgErr: <div className="errorDiv">Image URL needs to start with http/s.</div>,
  priceErr: <div className="errorDiv">Price must be a positive number.</div>,
};

export const handleRadio = (setFunc, str) => {
  setFunc(str);
};

const validateName = (str, setError) => {
  if (str.length < 5 && str.length > 0) {
    setError(POST_ERROR_MSGS.nameErr);
  } else if (str.length == 0) {
    setError("");
  } else {
    setError("");
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
  } else {
    setError("");
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
  } else {
    setError("");
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
    } else {
      setError(POST_ERROR_MSGS.imgErr);
    }
  } else {
    setError("");
  }
};
export const handleImageUrlField = (e, setFunc, setError) => {
  const { value } = e.target;
  validateImageField(value, setError)
  setFunc(value);
};

export const setFormType = (type) => {
  if (type == "instrument") return <InstrumentForm />;
  if (type == "amp") return <>AmpForm</>;
  if (type == "other") return <>Other</>;
};
