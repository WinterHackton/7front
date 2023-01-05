import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./PostList.css"

const PostList = () => {
  return (
    <div>
      <div className="post_list_title"><h1><a href="/389150">자유게시판</a></h1></div>
      <div className="post_articles">
        <Link to="/" id="writeArticleButton">
          새 글을 작성해주세요!
        </Link>
        <article>
          <Link to="/" className="article">
            <h2 className="medium">
              연애하면서 ㅁㅌ 가면
            </h2>
            <p className="small">
              어른놀이 말고 시간 보낼 재밌는거 뭐가 있을까??
            </p>
            <time className="small">
              10분 전
            </time>
            <h3 className="small">
              익명
            </h3>
            <ul className="status">
              <li title="공감" className="vote">
                0
              </li>
              <li title="댓글" className="comment">
                5
              </li>
            </ul>
          </Link>
        </article>
      </div>
    </div>
  )
};

export default PostList;