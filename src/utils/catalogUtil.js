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
