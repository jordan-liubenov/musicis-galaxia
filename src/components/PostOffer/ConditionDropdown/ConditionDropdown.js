const ConditionDropdown = (props) => {
  return (
    <>
      <label htmlFor="condition" id="condition">
        Condition:
      </label>
      <input
        className="typeLabel"
        type="radio"
        id="lightUse"
        name="select_condition"
        onChange={() => props.handleRadio(props.setCondition, "light")}
      ></input>
      <label htmlFor="lightUse">Light use</label>
      <input
        className="typeLabel"
        type="radio"
        id="regularUse"
        name="select_condition"
        onChange={() => props.handleRadio(props.setCondition, "regular")}
        defaultChecked={true}
      ></input>
      <label htmlFor="regularUse">Regular use</label>
      <input
        className="typeLabel"
        type="radio"
        id="heavyUse"
        name="select_condition"
        onChange={() => props.handleRadio(props.setCondition, "heavy")}
      ></input>
      <label htmlFor="heavyUse">Heavy use</label>
    </>
  );
};
//   onChange={() => props.handleRadio(props.setProductType, "amp")}
export default ConditionDropdown;
