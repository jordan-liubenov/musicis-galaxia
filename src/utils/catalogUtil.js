export const collectionAnchorHandler = (e, setFunc) => {
  //sets the state value of which collection to be rendered to the user upon clicking the catalog-navbar
  const { textContent } = e.target;
  const value = textContent.toLowerCase();
  setFunc(value);
};