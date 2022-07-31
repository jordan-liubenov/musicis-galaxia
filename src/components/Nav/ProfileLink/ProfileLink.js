import { NavLink } from "react-router-dom";

const ProfileLink = (props) => {
  return (
    <>
      <NavLink
        to={"/profile"}
        className={({ isActive }) =>
          isActive ? props.activeClassName : undefined
        }
      >
        Logged in as [{props.getUsername}],
      </NavLink>
    </>
  );
};

export default ProfileLink;
