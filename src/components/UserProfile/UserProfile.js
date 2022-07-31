import "../UserProfile/UserProfile.css";

import note from "../../img/eight.jpg";
import UserDetails from "./UserDetails/UserDetails";
import { useEffect, useState } from "react";
import { getAllByCurrentUser } from "../../services/postService";
import PostEntry from "./PostEntry/PostEntry";

const UserProfile = () => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    //TODO add functionality that checks if the current user has NO created entries in the DB yet and render accordingly

    getAllByCurrentUser().then((data) => setUserPosts(data)); //data - array of objects
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
