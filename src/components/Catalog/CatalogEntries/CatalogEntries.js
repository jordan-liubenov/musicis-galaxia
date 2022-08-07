import { useState } from "react";
import { Link } from "react-router-dom";
import "./CatalogEntries.css";

const CatalogEntry = (props) => {
  const entryArray = props.retrievedEntries;

  return entryArray.map((arr) =>
    arr.map((e) => (
      <div className="catalogEntry" key={e._id}>
        <div className="productNameDiv">
          <span className="catalogProductName">{e.productName}</span>
        </div>
        <div className="productNameDiv">
          <span className="catalogProductPrice">{e.price}$</span>
        </div>
        <Link className="offerLink" to={"/details/" + e._id}>
          <button className="openEntryButton">View</button>
        </Link>

        <img
          className="catalogEntryImg"
          src={e.imageUrl}
          width={280}
          height={250}
        ></img>
        <div>
          {" "}
          <span className="catalogType">Type: {e.type}</span>
        </div>
      </div>
    ))
  );
};

export default CatalogEntry;
