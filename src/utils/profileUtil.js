import { Link } from "react-router-dom";

const noPostView = (
  <div className="noPostEntry">
    <div className="noPosts">
      <p>
        <strong>No posts yet, create one here:</strong>
      </p>
      <Link className="offerLink" to={"/post"}>
        Create New
      </Link>
    </div>
  </div>
);

export const postEntryViewSetter = (dataArr) => {
  let toRender;
  if (dataArr.length == 0) {
    toRender = noPostView;
  } else {
    //after it has loaded and is different from undefined
    //check all 3 collections are empty (user has no Posts yet)
    if (
      dataArr[0].length == 0 &&
      dataArr[1].length == 0 &&
      dataArr[2].length == 0
    ) {
      toRender = noPostView;
    } else {
      toRender = dataArr.map((e) =>
        e.map((x) => (
          <div className="postEntry" key={x._id}>
            <div>
              <img
                className="profilePostImage"
                src={x.imageUrl}
                width={92}
                height={92}
              ></img>
            </div>
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
    }
  }
  return toRender;
};

export const setContainerClassName = (dataArr) => {
  if (dataArr.length > 0) {
    if (
      dataArr[0].length == 0 &&
      dataArr[1].length == 0 &&
      dataArr[2].length == 0
    ) {
      //className for empty container
      return "noContentBox";
    } else {
      //className for container with 1 or more entries
      return "contentBox";
    }
  }
};
