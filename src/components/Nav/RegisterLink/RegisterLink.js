import { NavLink } from "react-router-dom";

const RegisterLink = (props) => {
  return (
    <li>
      <NavLink
        to={"/register"}
        className={({ isActive }) =>
          isActive ? props.activeClassName : undefined
        }
      >
        Register
      </NavLink>
    </li>
  );
};

export default RegisterLink;
