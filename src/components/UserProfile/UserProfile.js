import "../UserProfile/UserProfile.css";

import note from "../../img/eight.jpg";
import UserDetails from "./UserDetails/UserDetails";
import { useEffect } from "react";
import { getAllByCurrentUser } from "../../services/postService";

const UserProfile = () => {
  //useEffect which fetches all of the current user's posts
  useEffect(() => {
    getAllByCurrentUser().then((data) => console.log(data));
  }, []);
  return (
    <>
      <div className="profileContainer">
        <UserDetails note={note} />
        <div className="userPosts">
          <div className="postEntry">
            <p>
              Gibson 8 string <strong>[Instrument]</strong>
            </p>
            <p>Price: 50$</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
