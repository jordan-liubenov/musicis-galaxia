import { getEmail } from "../../../utils/loginUtil";
import { getUsername } from "../../../utils/navUtil";

const UserDetails = (props) => {
  return (
    <div className="userDetailBox">
      <img src={props.note} height={130} width={150}></img>
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
