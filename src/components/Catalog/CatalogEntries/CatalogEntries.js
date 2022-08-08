import { useState } from "react";
import { Link } from "react-router-dom";
import { setEntriesToRender } from "../../../utils/catalogUtil";
import "./CatalogEntries.css";

const CatalogEntry = (props) => {
  const searchValue = props.searchValue;

  const filteredArray = props.filteredEntries;

  const entryArray = props.retrievedEntries;

  let toRender;

  if (searchValue.length > 0) {
    if (filteredArray != undefined && filteredArray.length > 0) {
      toRender = setEntriesToRender(filteredArray, entryArray);
    } else if (filteredArray != undefined && filteredArray.length == 0) {
      toRender = <h1>Cant find</h1>;
    }
  } else {
    toRender = setEntriesToRender(filteredArray, entryArray);
  }

  return toRender;
};

export default CatalogEntry;
