import "../UserProfile/UserProfile.css";

import note from "../../img/eight.jpg";
import { getAllByCurrentUser } from "../../services/postService";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import UserDetails from "./UserDetails/UserDetails";
import PostEntry from "./PostEntry/PostEntry";
import { setContainerClassName } from "../../utils/profileUtil";
import EmptySpace from "./EmptySpace/EmptySpace";

const UserProfile = () => {
  const { authStatus } = useContext(AuthContext);

  const [userPosts, setUserPosts] = useState([]);

  let containerClassName = setContainerClassName(userPosts);

  useEffect(() => {
    getAllByCurrentUser().then((data) => setUserPosts(data));
  }, [userPosts.length]);
  
  return (
    <div className="profileContainer">
      <UserDetails note={note} />
      <div className="profileTitle">
        <span className="profileTitleSpan">My posts:</span>
      </div>
      <div className={containerClassName}>
        <div className="userPosts">
          <PostEntry userPosts={userPosts} />
        </div>
      </div>
      <EmptySpace />
    </div>
  );
};

export default UserProfile;
