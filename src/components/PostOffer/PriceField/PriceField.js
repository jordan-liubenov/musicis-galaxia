import "../PriceField/PriceField.css";

const PriceField = (props) => {
  //TODO add validation for price field to not be able to go under 0$

  return (
    <>
      <label htmlFor="priceField">Price(in dollars):</label>
      {props.priceErr}
      <div>
        <input
          type="number"
          name="priceField"
          id="priceField"
          className="priceField"
          value={props.price}
          onChange={props.handlePriceField}
          required
        ></input>
      </div>
    </>
  );
};

export default PriceField;
