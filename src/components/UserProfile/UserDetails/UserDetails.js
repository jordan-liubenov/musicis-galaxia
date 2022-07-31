import { getEmail } from "../../../utils/loginUtil";
import { getUsername } from "../../../utils/navUtil";

import "../UserDetails/UserDetails.css";

const UserDetails = (props) => {
  return (
    <div className="userDetailBox">
      <img
        className="profilePicture"
        src={props.note}
        height={110}
        width={120}
      ></img>
      <p className="userDetails">Logged in as:</p>
      <p className="userDetails">
        <strong>[{getUsername()}]</strong>
      </p>
      <p className="userDetails">
        {" "}
        <strong>[{getEmail()}] </strong>
      </p>
    </div>
  );
};

export default UserDetails;
