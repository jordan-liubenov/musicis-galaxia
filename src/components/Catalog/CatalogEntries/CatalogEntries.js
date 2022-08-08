import { useState } from "react";
import { Link } from "react-router-dom";
import {
  renderOneCollection,
  filterSpecificCollection,
  setEntriesToRender,
  filterSingleCollection,
} from "../../../utils/catalogUtil";
import NoResults from "../NoResults/NoResults";
import "./CatalogEntries.css";

const CatalogEntry = (props) => {
  const collectionToRender = props.collection; //the type of the collection currently being rendered

  const searchValue = props.searchValue; //the currently searched-for string of text

  const entryArray = props.retrievedEntries; //the raw array of data after being fetched

  const filteredArray = props.filteredEntries; //if there is text in the search bar, the results are stored in this variable

  let toRender;

  if (searchValue.length > 0) {
    if (filteredArray != undefined && filteredArray.length > 0) {
      toRender = setEntriesToRender(filteredArray, entryArray);
    } else if (filteredArray != undefined && filteredArray.length == 0) {
      toRender = <NoResults />;
    }
  } else {
    toRender = setEntriesToRender(filteredArray, entryArray);
  }

  //temp will store the current collection to be rendered (if the user selects a choice other than "All")
  let temp;
  if (collectionToRender == "Instruments") {
    temp = filterSpecificCollection(entryArray, "Instrument");
    toRender = renderOneCollection(temp);
    if (searchValue.length > 0) {
      toRender = filterSingleCollection(temp, searchValue);
      toRender = setEntriesToRender(toRender);
    }
  } else if (collectionToRender == "Amplifiers") {
    temp = filterSpecificCollection(entryArray, "Amplifier");
    toRender = renderOneCollection(temp);
    if (searchValue.length > 0) {
      toRender = filterSingleCollection(temp, searchValue);
      toRender = setEntriesToRender(toRender);
    }
  } else if (collectionToRender == "Other") {
    temp = filterSpecificCollection(entryArray, "Other");
    toRender = renderOneCollection(temp);
    if (searchValue.length > 0) {
      toRender = filterSingleCollection(temp, searchValue);
      toRender = setEntriesToRender(toRender);
    }
  }
  if (filteredArray != undefined && filteredArray.length == 0) {
    toRender = <NoResults />;
  }

  return toRender;
};

export default CatalogEntry;
