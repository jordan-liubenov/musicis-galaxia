import { Link } from "react-router-dom";

import arrowUp from "../img/arrowUp.png";
import arrowDown from "../img/arrowDown.png";

export const collectionAnchorHandler = (e, setFunc) => {
  //sets the state value of which collection to be rendered to the user upon clicking the catalog-navbar
  const { textContent } = e.target;

  const value = textContent;

  setFunc(value);
};

export const setSpecificCollection = (
  toRender,
  selectedCollection,
  searchValue,
  entryArray
) => {
  //filters only the entries in the chosen collection
  //the substring detects what collection is currently sellected
  selectedCollection = filterSpecificCollection(
    entryArray,
    selectedCollection.substring(0, selectedCollection.length - 1)
  );

  //toRender's value is the mapped current collection
  toRender = renderOneCollection(selectedCollection);

  if (searchValue.length > 0) {
    //in case the user searches for something in the search bar
    //only search for items within the currently selected collection
    //and re-map the new version of the component which contains results with the searched value by the user
    toRender = filterSingleCollection(selectedCollection, searchValue);
    toRender = setEntriesToRender(toRender);
  }

  return toRender; //return the final version of the component to be rendered
};

export const checkForEmptyCollection = (entryArray) => {
  //checks if the fetched collection array does not contain any entries at all
  if (entryArray.length > 0) {
    if (
      entryArray[0].length == 0 &&
      entryArray[1].length == 0 &&
      entryArray[2].length == 0
    ) {
      return true;
    } else {
      return false;
    }
  }
};

export const handleSearchBar = (e, setFunc) => {
  //assign value to the search bar state
  const { value } = e.target;
  setFunc(value);
};

export const filterOffers = (dataArr, str) => {
  //filters the result array based on the Search Value input by client
  let resArr = [];

  const searchVal = str.toLowerCase();

  if (dataArr != undefined) {
    //since dataArr is an array containing 3 child arrays which contain objects
    //iterate through the parent Array(dataArr), and iterate over each child array
    //in order to find the entries which match the Searchbar Value (if any)
    dataArr.forEach((childArr) => {
      for (let i = 0; i < childArr.length; i++) {
        const currentEntry = childArr[i];
        const currentName = currentEntry.productName;
        if (currentName.toLowerCase().includes(searchVal)) {
          resArr.push(currentEntry);
        }
      }
    });
  }

  return resArr;
};

export const setEntriesToRender = (filteredEntries) => {
  if (filteredEntries == undefined) return;

  if (filteredEntries.length > 0) {
    return filteredEntries.map((e) => (
      <div className="catalogEntry" key={e._id}>
        <div className="postInfoContainer">
          <div className="productNameDiv">
            <span className="catalogProductName">{e.productName}</span>
          </div>

          <div className="catalogTypeDiv">
            {" "}
            <span className="catalogType">Type: {e.type}</span>
          </div>
          <div className="productNameDiv">
            <span className="catalogProductPrice">Price: {e.price}$</span>
          </div>
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
        <div className="thumbDiv">
          <span className="thumbsUp">
            <img src={arrowUp} width={25} height={25} />: {e.likes}
          </span>
          <span className="thumbsDown">
            <img src={arrowDown} width={25} height={25} className="arrowDown" />
            : {e.dislikes}
          </span>
        </div>
      </div>
    ));
  }
};

export const filterSpecificCollection = (dataArr, collectionType) => {
  let resArr = [];

  if (dataArr == undefined) return;

  //iterating over the parent Array(dataArr) and for each child array
  //iterate each child array to find entries of the currently selected collection-type
  dataArr.forEach((childArr) => {
    for (let i = 0; i < childArr.length; i++) {
      const currentItem = childArr[i];
      if (currentItem.type == collectionType) {
        resArr.push(currentItem);
      }
    }
  });

  return resArr;
};

export const renderOneCollection = (arr) => {
  return arr.map((e) => (
    <div className="catalogEntry" key={e._id}>
      <div className="postInfoContainer">
        <div className="productNameDiv">
          <span className="catalogProductName">{e.productName}</span>
        </div>

        <div className="catalogTypeDiv">
          {" "}
          <span className="catalogType">Type: {e.type}</span>
        </div>
        <div className="productNameDiv">
          <span className="catalogProductPrice">Price: {e.price}$</span>
        </div>
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
      <div className="thumbDiv">
        <span className="thumbsUp">
          <img src={arrowUp} width={25} height={25} />: {e.likes}
        </span>
        <span className="thumbsDown">
          <img src={arrowDown} width={25} height={25} className="arrowDown" />:{" "}
          {e.dislikes}
        </span>
      </div>
    </div>
  ));
};

export const filterSingleCollection = (collection, searchValue) => {
  if (collection == undefined) return;
  let resArr = [];
  //filters out entries from only one selected collection which contain the searched value by the client
  for (let i = 0; i < collection.length; i++) {
    const current = collection[i];
    if (current.productName.toLowerCase().includes(searchValue)) {
      resArr.push(current);
    }
  }
  return resArr;
};
