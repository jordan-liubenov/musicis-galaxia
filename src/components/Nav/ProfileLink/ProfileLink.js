import { NavLink } from "react-router-dom";

import "../ProfileLink/ProfileLink.css";

const ProfileLink = (props) => {
  return (
    <>
      <NavLink
        to={"/profile"}
        className={({ isActive }) =>
          isActive ? props.activeClassName : undefined
        }
      >
        [{props.getUsername}]
      </NavLink>
    </>
  );
};

export default ProfileLink;
