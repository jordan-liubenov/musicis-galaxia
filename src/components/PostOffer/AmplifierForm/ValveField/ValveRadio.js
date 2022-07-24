const ValveRadio = (props) => {
  return (
    <div className="conditionContainer">
      <label>Valves:</label>
      <input
        className="typeLabel"
        type="radio"
        id="yes"
        name="select_valve"
        value={props.valves}
        defaultChecked={true}
        onChange={() => props.handleRadio(props.setValves, "yes")}
      ></input>
      <label htmlFor="yes">Yes</label>
      <input
        className="typeLabel"
        type="radio"
        id="no"
        name="select_valve"
        value={props.valves}
        onChange={() => props.handleRadio(props.setValves, "no")}
      ></input>
      <label htmlFor="no">No</label>
    </div>
  );
};

export default ValveRadio;
