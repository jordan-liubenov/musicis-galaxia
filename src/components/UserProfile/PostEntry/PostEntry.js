import "../PostEntry/PostEntry.css";

const PostEntry = (props) => {
  //props - array of arrays containing 1 or more objects

  const dataArr = props.userPosts;
  console.log(dataArr);
  return dataArr.map((e) =>
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
        <a className="offerLink">Open</a>
      </div>
    ))
  );
};

export default PostEntry;
