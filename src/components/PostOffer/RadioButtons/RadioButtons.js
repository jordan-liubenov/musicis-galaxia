import "../RadioButtons/RadioButtons.css";

const RadioButtons = (props) => {
  //radio buttons used for setting the type of form to be rendered
  return (
    <div className="radioDiv">
      <input
        className="typeLabel"
        type="radio"
        id="instrument"
        name="select_type"
        defaultChecked={true}
        onChange={() => props.handleRadio(props.setProductType, "instrument")}
      ></input>
      <label htmlFor="instrument">Instrument</label>
      <input
        className="typeLabel"
        type="radio"
        id="amp"
        name="select_type"
        onChange={() => props.handleRadio(props.setProductType, "amp")}
      ></input>
      <label htmlFor="amp">Amplifier</label>
      <input
        className="typeLabel"
        type="radio"
        id="other"
        name="select_type"
        onChange={() => props.handleRadio(props.setProductType, "other")}
      ></input>
      <label htmlFor="other">Other</label>
    </div>
  );
};

export default RadioButtons;
