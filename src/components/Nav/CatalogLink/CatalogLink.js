import { NavLink } from "react-router-dom";

const CatalogLink = (props) => {
  return (
    <li>
      <NavLink
        to={"/catalog"}
        className={({ isActive }) => (isActive ? props.activeClassName : undefined)}
      >
        Catalog
      </NavLink>
    </li>
  );
};

export default CatalogLink;
