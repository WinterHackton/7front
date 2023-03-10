import React from "react";
import { Top, Bottom, Wrap } from "../App";
import { PostList, WriteArticle } from "../components/PostList";
import RightAside from "../components/Aside";
import "../components/PostList.css";

function Post() {
  return (
    <div>
      <Top></Top>
      <Wrap></Wrap>
      <div className="container">
        <PostList></PostList>
        {/* <RightAside></RightAside> */}
      </div>
      <Bottom></Bottom>
    </div>
  );
}

export default Post;
