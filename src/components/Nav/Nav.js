import "../Nav/Nav.css";

import { Link, useNavigate } from "react-router-dom";

import logoImg from "../../img/note.png";

import { activeClassName, getUsername } from "../../utils/navUtil";

import { useEffect, useState } from "react";

import { checkIfLoggedIn, logOut } from "../../utils/loginUtil";

import HomeLink from "./HomeLink/HomeLink";
import CatalogLink from "./CatalogLink/CatalogLink";
import RegisterLink from "./RegisterLink/RegisterLink";
import LoginLink from "./LoginLink/LoginLink";
import PostLink from "./PostLink/PostLink";
import ProfileLink from "./ProfileLink/ProfileLink";

const Nav = () => {
  const navigate = useNavigate();

  const [loggedIn, setStatus] = useState(false);

  let loggedInCheck = checkIfLoggedIn();

  useEffect(() => {
    if (checkIfLoggedIn()) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [loggedInCheck]);

  return (
    <header>
      <nav className="navBar">
        <ul className="links">
          <div className="logoDiv">
            <Link to={"/"}>
              <img
                className="logo"
                src={logoImg}
                width={60}
                height={60}
                alt="Something seems to be missing..."
              ></img>
            </Link>
          </div>

          <HomeLink activeClassName={activeClassName} />

          <CatalogLink activeClassName={activeClassName} />

          {loggedIn ? (
            <></>
          ) : (
            <RegisterLink activeClassName={activeClassName} />
          )}
          {loggedIn ? <></> : <LoginLink activeClassName={activeClassName} />}

          {loggedIn ? <PostLink activeClassName={activeClassName} /> : <></>}

          <div className="navRight">
            <li>
              {loggedIn ? (
                <>
                  <ProfileLink
                    getUsername={getUsername()}
                    activeClassName={activeClassName}
                  />{" "}
                  <a
                    href="/logout"
                    className="logoutAnchor"
                    onClick={(e) => logOut(e, navigate)}
                  >
                    {"| "}
                    Logout
                  </a>
                </>
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
