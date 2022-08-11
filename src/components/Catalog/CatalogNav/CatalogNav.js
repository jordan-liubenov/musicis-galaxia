import "../CatalogNav/CatalogNav.css";

const CatalogNav = (props) => {
  return (
    <nav className="catalogNav">
      <ul className="catalogLinks">
        <li onClick={props.collectionAnchorHandler}>
          <a>All</a>
        </li>
        <li onClick={props.collectionAnchorHandler}>
          <a>Instruments</a>
        </li>
        <li onClick={props.collectionAnchorHandler}>
          <a>Amplifiers</a>
        </li>
        <li onClick={props.collectionAnchorHandler}>
          <a>Others</a>
        </li>
      </ul>
    </nav>
  );
};

export default CatalogNav;
