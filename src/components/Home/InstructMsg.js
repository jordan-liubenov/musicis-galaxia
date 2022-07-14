import { Link } from "react-router-dom";

const InstructMsg = () => {
  return (
    <div className="instructMsg">
      <p>
        To get started, simply open the{" "}
        <Link className="catalogRef" to={"/catalog"}>
          Catalog
        </Link>{" "}
        to browse<br></br>
        all posts and see if anything catches your eye.<br></br>
        <br></br>
        Alternatively, if you'd like to create a new offer and sell
        <br></br>
        one of your pieces of gear, create a free account{" "}
        <Link className="catalogRef" to={"/register"}>
          Here
        </Link>
        , and <br></br>
        share your offer with the rest of the users.
        <br></br>
      </p>
      <br></br>
    </div>
  );
};

export default InstructMsg;
