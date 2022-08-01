import "../UserProfile/UserProfile.css";

import note from "../../img/eight.jpg";
import { getAllByCurrentUser } from "../../services/postService";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import UserDetails from "./UserDetails/UserDetails";
import PostEntry from "./PostEntry/PostEntry";

const UserProfile = () => {
  const { authStatus } = useContext(AuthContext);

  const [userPosts, setUserPosts] = useState([]);
  console.log(userPosts);
  useEffect(() => {
    //TODO add functionality that checks if the current user has NO created entries in the DB yet and render accordingly

    getAllByCurrentUser(authStatus).then((data) => setUserPosts(data)); //data - array of objects
  }, []);
  return (
    <>
      <div className="profileContainer">
        <UserDetails note={note} />
        <div className="userPosts">
          <PostEntry userPosts={userPosts} />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
