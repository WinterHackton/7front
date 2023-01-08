import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../components/PostList.css";
import { useCookies } from "react-cookie";
import Category from "../category";
import RightAside from "../components/Aside";
import { Top, Bottom, Wrap } from "../App";
import "./Postdetail.css";

function Postdetail(props) {
  let [article, setArticle] = useState([]);
  const [cookies] = useCookies(["login"]);
  const [is_login, setIsLogin] = React.useState(false);
  let [categorys] = useState(Category);
  let { id } = useParams();
  let [post, postDetail] = useState([]);
  const cookie = cookies.login;
  const post_id = localStorage.getItem("post_id");
  let [댓글, 댓글작성] = useState("");
  let [comment, setComment] = useState([]);
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
        postDetail(res.data);

        let copy = res.data.commentFindAllDtos;

        setComment(copy);
      })
      .catch(() => {
        console.log("실패");
      });
  });
  console.log(comment);
  return (
    <div>
      <Top></Top>
      <Wrap></Wrap>
      <div className="container">
        <div className="post_list_title">
          <h1>
            <a href="/post">{categorys[id].title}</a>
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
            {comment.map(function (a, i) {
              return (
                <article className="parnet">
                  <h3 className="medium">익명{i + 1}</h3>
                  <ul className="status">
                    <li className="childcomment">대댓글</li>
                    <li className="commentvote">공감</li>
                    <li
                      className="messagesend"
                      data-modal="messageSend"
                      data-comment-id="1303885551"
                      data-is-anonym="1"
                    >
                      쪽지
                    </li>
                    <li class="abuse">신고</li>
                  </ul>
                  <hr></hr>
                  <p className="large">{comment[i].content}</p>
                </article>
              );
            })}

            <form className="writecomment">
              <input
                onChange={(e) => {
                  댓글작성(e.target.value);
                }}
                type="text"
                placeholder="댓글을 입력하세요"
              />
              <ul className="option" id="side">
                <li className="anom"></li>
                <li
                  onClick={() => {
                    axios
                      .post(
                        "/api/v1/comment",
                        {
                          content: 댓글,
                          postId: 1,
                          anonymous: true,
                        },
                        {
                          headers: {
                            accessToken: cookie,
                          },
                        }
                      )
                      .then((result) => {})
                      .catch(() => {
                        console.log("실패");
                      });
                  }}
                  title="완료"
                  className="submits"
                ></li>
              </ul>
            </form>
          </div>
          <div className="clearBothOnly"></div>
        </div>
        <div className="pagelist">
          <Link to={"/post/" + categorys[id].id} className="pagelist-btn">
            글목록
          </Link>
        </div>

        <RightAside></RightAside>
      </div>
      <Bottom></Bottom>
    </div>
  );
}
export default Postdetail;
