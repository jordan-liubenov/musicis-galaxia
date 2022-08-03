import "../CatalogNav/CatalogNav.css";

const CatalogNav = () => {
  return (
    <nav className="catalogNav">
      <ul className="catalogLinks">
        <li>
          <a>All</a>
        </li>
        <li>
          <a>Instruments</a>
        </li>
        <li>
          <a>Amplifiers</a>
        </li>
        <li>
          <a>Other</a>
        </li>
      </ul>
    </nav>
  );
};

export default CatalogNav;
