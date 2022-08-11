import { useState } from "react";
import { Link } from "react-router-dom";
import {
  renderOneCollection,
  filterSpecificCollection,
  setEntriesToRender,
  filterSingleCollection,
  setSpecificCollection,
} from "../../../utils/catalogUtil";
import NoResults from "../NoResults/NoResults";
import "./CatalogEntries.css";

const CatalogEntry = (props) => {
  const selectedCollection = props.collection; //the type of the collection currently being rendered

  const searchValue = props.searchValue; //the currently searched-for string of text

  const entryArray = props.retrievedEntries; //the raw array of data after being fetched

  const filteredArray = props.filteredEntries; //if there is text in the search bar, the results are stored in this variable

  let toRender; //will contain the component to be rendered

  if (searchValue.length > 0) {
    if (filteredArray != undefined && filteredArray.length > 0) {
      toRender = setEntriesToRender(filteredArray, entryArray);
    } else if (filteredArray != undefined && filteredArray.length == 0) {
      toRender = <NoResults />;
    }
  } else {
    toRender = setEntriesToRender(filteredArray, entryArray);
  }

  if (selectedCollection != "All") {
    //if user selects specific collection they want to view, filter only the offers it contains
    toRender = setSpecificCollection(
      toRender,
      selectedCollection,
      searchValue,
      entryArray
    );
  }

  if (filteredArray != undefined && filteredArray.length == 0) {
    //if no results exist with the searched Value, display <NoResults /> component
    toRender = <NoResults />;
  }

  return toRender;
};

export default CatalogEntry;
