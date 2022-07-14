import "../Nav/Nav.css";

import { Link } from "react-router-dom";

import logoImg from "../../img/note.png";

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
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/catalog"}>Catalog</Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
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
