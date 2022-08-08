import { Link } from "react-router-dom";

export const collectionAnchorHandler = (e, setFunc) => {
  //sets the state value of which collection to be rendered to the user upon clicking the catalog-navbar
  const { textContent } = e.target;
  const value = textContent.toLowerCase();
  setFunc(value);
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

export const setEntriesToRender = (filteredEntries, unfilteredEntries) => {
  if (filteredEntries == undefined || unfilteredEntries == undefined) return;
  if (filteredEntries.length > 0) {
    return filteredEntries.map((e) => (
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
        <div className="catalogTypeDiv">
          {" "}
          <span className="catalogType">Type: {e.type}</span>
        </div>
        <div className="thumbDiv">
          <span className="thumbsUp">👍: {e.likes}</span>
          <span className="thumbsDown">👎: {e.dislikes}</span>
        </div>
      </div>
    ));
  } else if (!filteredEntries) {
    //The regular render function for the Array containing ALL entries fetched from the db
    return unfilteredEntries.map((arr) =>
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
          <div className="catalogTypeDiv">
            {" "}
            <span className="catalogType">Type: {e.type}</span>
          </div>
          <div className="thumbDiv">
            <span className="thumbsUp">👍: {e.likes}</span>
            <span className="thumbsDown">👎: {e.dislikes}</span>
          </div>
        </div>
      ))
    );
  }
};
