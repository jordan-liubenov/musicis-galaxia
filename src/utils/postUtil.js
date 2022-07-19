import InstrumentForm from "../components/PostOffer/InstrumentForm/InstrumentForm";

const ERROR_MSGS = {
  nameErr: <div className="errorDiv">Should be atleast 6 characters long.</div>,
  descriptionErr: (
    <div className="errorDiv">Should be atleast 12 characters long.</div>
  ),
  imgErr: <div className="errorDiv">Image URL needs to start with http/s.</div>,
};

export const handleRadio = (setFunc, str) => {
  setFunc(str);
};

export const handleNameField = (e, setFunc) => {
  const { value } = e.target;
  //add validation function if current field is NameField or Description field or Image field
  setFunc(value);
};

export const handleDescriptionField = (e, setFunc) => {
  const { value } = e.target;
  //add validation function if current field is NameField or Description field or Image field
  setFunc(value);
};

export const setFormType = (type) => {
  if (type == "instrument") return <InstrumentForm />;
  if (type == "amp") return <>AmpForm</>;
  if (type == "other") return <>Other</>;
};
