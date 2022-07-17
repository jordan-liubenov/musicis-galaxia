import { NavLink } from "react-router-dom";

const PostLink = (props) => {
  return (
    <li>
      <NavLink
        to={"/post"}
        className={({ isActive }) =>
          isActive ? props.activeClassName : undefined
        }
      >
        Post
      </NavLink>
    </li>
  );
};

export default PostLink;
