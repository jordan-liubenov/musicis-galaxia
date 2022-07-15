import "../Nav/Nav.css";

import { Link, NavLink } from "react-router-dom";

import logoImg from "../../img/note.png";

import { activeClassName } from "../../utils/navUtil";

const Nav = (props) => {
  //TODO Check if there is a logged-in user and render navbar  accordingly

  return (
    <header>
      <nav className="navBar">
        <ul className="links">
          <div className="logoDiv">
            <Link to={"/"}>
              <img className="logo" src={logoImg} width={60} height={60}></img>
            </Link>
          </div>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/catalog"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Catalog
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/register"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/post"}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
            >
              Post
            </NavLink>
          </li>
          <div className="navRight">
            <li>
              <a href="/logout">Welcome [Guest], Logout</a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
