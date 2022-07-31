const PostEntry = (props) => {
  return (
    <div className="postEntry">
      <p>
        {props.productName} <strong>[{props.type}]</strong>
      </p>
      <p>Price: {props.price}$</p>
    </div>
  );
};

export default PostEntry;

/*
  Info from props to be rendered:
  props.productName, product.type, product.price
*/
