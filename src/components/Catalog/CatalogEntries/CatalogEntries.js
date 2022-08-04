import { useState } from "react";
import "./CatalogEntries.css";
const img =
  "https://static.turbosquid.com/Preview/2019/12/04__14_09_38/Cheese_View01.jpg65A06B26-D175-4A53-B065-0259D4B1DF89Large.jpg";

const CatalogEntry = (props) => {
  const entryArray = props.retrievedEntries;

  return entryArray.map((arr) =>
    arr.map((e) => (
      <div className="catalogEntry" key={e._id}>
        <div className="productNameDiv">
          <span className="catalogProductName">
            <strong>{e.productName}</strong>
          </span>
          <span className="catalogProductName">{e.price}$</span>
        </div>
        <button className="openEntryButton">View</button>
        <img
          className="catalogEntryImg"
          src={e.imageUrl}
          width={320}
          height={320}
        ></img>
      </div>
    ))
  );
};

export default CatalogEntry;
