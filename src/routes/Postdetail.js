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
  const cookie = cookies.login;



  useEffect(() => {
    const cookie = cookies.login;
    if (cookie) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
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
              <hr/>
              <h2 className="post-title">제목1</h2>
              <p className="post-desc">내용입니다</p>
              <ul className="status-left">
                <li title="공감" className="vote">
                  0
                </li>
                <li title="댓글" className="comment">
                  5
                </li>
                <li className="scrap">0</li>
              </ul>
              <hr/>
              <div className="btns">
                <li className="pos-vote">공감</li>
                <li className="btn-scrap">스크랩</li>
              </div>
              <div className="clearBothOnly"></div>
              <form>
                <input type="text" placeholder="댓글을 입력하세요" />
              </form>
              <ul className="option" id="side">
                <li>익명</li>
                <li
                  title="완료"
                  className="submit"
                ></li>
                </ul>
            </Link>
          </article>
        </div>
      <RightAside></RightAside>
      </div>
      <Bottom></Bottom>
    </div>
  )
};
export default Postdetail;
