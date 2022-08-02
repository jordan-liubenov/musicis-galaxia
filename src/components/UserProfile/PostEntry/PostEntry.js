import { Link } from "react-router-dom";
import "../PostEntry/PostEntry.css";

const PostEntry = (props) => {
  //props - array of arrays containing 1 or more objects

  const dataArr = props.userPosts;

  let toRender;
  if (dataArr.length > 0) {
    toRender = dataArr.map((e) =>
      e.map((x) => (
        <div className="postEntry" key={x._id}>
          <p>
            <strong>Product name:</strong> {x.productName}
          </p>
          <p>
            {" "}
            <strong> Product type:</strong> [{x.type}]
          </p>
          <p>
            <strong>Price:</strong> {x.price}$
          </p>
          <Link className="offerLink" to={"/details/" + x._id}>
            Open
          </Link>
        </div>
      ))
    );
  } else {
    toRender = (
      <div className="postEntry">
        <p>
          <strong>No posts yet, create one here:</strong>
        </p>
        <Link className="offerLink" to={"/post"}>
          Create New
        </Link>
      </div>
    );
  }

  return toRender;
};

export default PostEntry;
