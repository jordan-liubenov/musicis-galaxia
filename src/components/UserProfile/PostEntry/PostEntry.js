import { useEffect, useState } from "react";
import { postEntryViewSetter } from "../../../utils/profileUtil";
import "../PostEntry/PostEntry.css";

const PostEntry = (props) => {
  //props - array of arrays containing 1 or more objects

  const dataArr = props.userPosts;

  const [userPosts, setUserPosts] = useState("");

  let toRender;
  useEffect(() => {
    toRender = postEntryViewSetter(dataArr); //sets what view the toRender-variable returns
    setUserPosts(toRender);
  }, [dataArr.length]);

  return userPosts;
};

export default PostEntry;
