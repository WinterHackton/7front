import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../components/PostList.css";
import { useCookies } from "react-cookie";
import Category from "../category";
import RightAside from "../components/Aside";
import { Top, Bottom, Wrap } from "../App";
import "./Postdetail.css"

function Postdetail(props) {
  let [article, setArticle] = useState([]);
  const [cookies] = useCookies(["login"]);
  const [is_login, setIsLogin] = React.useState(false);
  let [categorys] = useState(Category);
  let { id } = useParams();
  let [post, postDetail] = useState([]);
  const cookie = cookies.login;
  const post_id = localStorage.getItem('post_id');

  useEffect(() => {
    const cookie = cookies.login;
    if (cookie) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });

  useEffect(() => {
    axios
      .get("/api/v1/post/" + categorys[id].title1 + "/" + post_id, {
        headers: {
          accessToken: cookie,
        },
      })
      .then((res) => {
        console.log(res.data);
        postDetail(res.data);
      })
      .catch(() => {
        console.log("실패");
      });
  });

  return (
    <div>
      <Top></Top>
      <Wrap></Wrap>
      <div className="container">
        <div className="post_list_title">
          <h1>
            <a href="/post">자유게시판</a>
          </h1>
        </div>
        <div className="post_articles">
          <article>
            <Link to="#" className="article">
              <img src="/0.png" className="profile-img"></img>
              <div className="profile">
                <h3 className="profile-name">익명</h3>
                <time>10분전</time>
              </div>
              <ul className="post-status">
                <li>쪽지</li>
                <li>신고</li>
              </ul>
              <hr />
              <h2 className="post-title">{post.title}</h2>
              <p className="post-desc">{post.content}</p>
              <ul className="status-left">
                <li title="공감" className="vote">
                  0
                </li>
                <li title="댓글" className="comment">
                  0
                </li>
                <li id="scrap">0</li>
              </ul>
              <hr />
              <div className="btns">
                <li className="pos-vote">공감</li>
                <li className="btn-scrap">스크랩</li>
              </div>
              
            </Link>
          </article>
          <div className="comments">
            <form className="writecomment">
              <input type="text" placeholder="댓글을 입력하세요" />
              <ul className="option" id="side">
                <li className="anom"></li>
                <li
                  title="완료"
                  className="submits"
                ></li>
              </ul>
            </form>
          </div>
          <div className="clearBothOnly"></div>
        </div>
        <div className="pagelist">
          <Link to={"/post/"+categorys[id].id} className="pagelist-btn">
            글목록
          </Link>
        </div>

        <RightAside></RightAside>
      </div>
      <Bottom></Bottom>
    </div>
  )
};
export default Postdetail;
