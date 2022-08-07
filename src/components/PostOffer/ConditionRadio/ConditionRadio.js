import "../ConditionRadio/ConditionRadio.css";

const ConditionRadio = (props) => {
  let currentCondition;
  if (props.currentOffer != undefined) {
    currentCondition = props.currentOffer.condition;
  }

  return (
    <div className="conditionContainer">
      <label htmlFor="condition" id="condition">
        Condition:
      </label>
      <input
        className="typeLabel"
        type="radio"
        id="lightUse"
        name="select_condition"
        value={props.condition}
        defaultChecked={
          currentCondition != undefined && currentCondition == "light"
        }
        onChange={() => props.handleRadio(props.setCondition, "light")}
      ></input>
      <label htmlFor="lightUse">Light use</label>
      <input
        className="typeLabel"
        type="radio"
        id="regularUse"
        name="select_condition"
        value={props.condition}
        defaultChecked={true}
        onChange={() => props.handleRadio(props.setCondition, "regular")}
      ></input>
      <label htmlFor="regularUse">Regular use</label>
      <input
        className="typeLabel"
        type="radio"
        id="heavyUse"
        name="select_condition"
        value={props.condition}
        defaultChecked={
          currentCondition != undefined && currentCondition == "heavy"
        }
        onChange={() => props.handleRadio(props.setCondition, "heavy")}
      ></input>
      <label htmlFor="heavyUse">Heavy use</label>
    </div>
  );
};
export default ConditionRadio;
