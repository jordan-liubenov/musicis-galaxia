import "../PriceField/PriceField.css";

const PriceField = (props) => {
  //TODO add validation for price field to not be able to go under 0$

  return (
    <>
      <label htmlFor="priceField" id="priceField">
        Price(in dollars):
      </label>
      <div>
        <input
          type="number"
          name="priceField"
          id="priceField"
          className="priceField"
          required
        ></input>
      </div>
    </>
  );
};

export default PriceField;
