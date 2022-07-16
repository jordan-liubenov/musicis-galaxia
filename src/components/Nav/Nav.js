import "../Nav/Nav.css";

import { Link, NavLink, useNavigate } from "react-router-dom";

import logoImg from "../../img/note.png";

import { activeClassName, getUsername } from "../../utils/navUtil";

import { useEffect, useState } from "react";

import { checkIfLoggedIn, logOut } from "../../utils/loginUtil";

const Nav = () => {
  const navigate = useNavigate();

  const [loggedIn, setStatus] = useState(false);

  useEffect(() => {
    if (checkIfLoggedIn()) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [checkIfLoggedIn()]);

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
            {" "}
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
          {loggedIn ? (
            <></>
          ) : (
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
          )}

          {loggedIn ? (
            <></>
          ) : (
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
          )}
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
              {loggedIn ? (
                <a href="/logout" onClick={(e) => logOut(e, navigate)}>
                  Logged in as [{getUsername()}], Logout
                </a>
              ) : (
                <a>Welcome, Guest</a>
              )}
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
