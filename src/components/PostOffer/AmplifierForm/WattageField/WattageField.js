const WattageField = (props) => {
  return (
    <>
      <label htmlFor="wattageField">Wattage:</label>
      {props.wattageErr}
      <div>
        <input
          type="number"
          id="wattageField"
          name="wattageField"
          className="priceField"
          value={props.wattage}
          onChange={props.handleWattageField}
        ></input>
      </div>
    </>
  );
};

export default WattageField;
