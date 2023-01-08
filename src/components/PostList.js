import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./PostList.css";
import { useCookies } from "react-cookie";
import Category from "../category";

function PostList(props) {
  let [글제, 글제목작성] = useState("");
  let [글내, 글내용작성] = useState("");

  let [글제목, 글제목변경] = useState([]);
  let [글내용, 글내용변경] = useState([]);

  let [write, setWrite] = useState(false);
  let [new_w, setNew] = useState(true);

  let [article, setArticle] = useState([]);
  const [cookies] = useCookies(["login"]);
  let [categorys] = useState(Category);
  let { id } = useParams();

  const cookie = cookies.login;

  useEffect(() => {
    axios
      .get("/api/v1/post/" + categorys[id].title + "?page=0", {
        headers: {
          accessToken: cookie,
        },
      })
      .then((result) => {
        console.log("성공");
        let copy = result.data;
        setArticle(copy);
      })
      .catch(() => {
        console.log("실패");
      });
  });
  return (
    <div>
      <div className="post_list_title">
        <h1>
          <a href="/post">{categorys[id].title}</a>
        </h1>
      </div>
      {write == true ? (
        <WriteArticle
          글제목작성={글제목작성}
          글제={글제}
          글내={글내}
          글내용작성={글내용작성}
        ></WriteArticle>
      ) : null}

      <div className="post_articles">
        {new_w == true ? (
          <Test setWrite={setWrite} setNew={setNew}></Test>
        ) : null}
        {article.map(function (a, i) {
          return (
            <article>
              <Link to="#" className="article">
                <h2 className="medium">{article[i].title}</h2>
                <p className="small">{article[i].content}</p>
                <time className="small">10분전</time>
                <h3 className="small">{article[i].nickname}</h3>
                <ul className="status">
                  <li title="공감" className="vote">
                    0
                  </li>
                  <li title="댓글" className="comment">
                    5
                  </li>
                </ul>
                {/* <button
                  onClick={() => {
                    let copy = [...글제목];
                    copy.splice(i, 1);
                    글제목변경(copy);
                    let copy1 = [...글내용];
                    copy1.splice(i, 1);
                    글제목변경(copy1);
                  }}
                >
                  삭제
                </button> */}
              </Link>
            </article>
          );
        })}
      </div>

      <input
        onChange={(e) => {
          글제목작성(e.target.value);
        }}
      />
      <input
        onChange={(e) => {
          글내용작성(e.target.value);
        }}
      />

      <button
        onClick={() => {
          axios
            .post(
              "/api/v1/post",
              {
                title: 글제,
                content: 글내,
                category: categorys[id].title,
                anonymous: true,
              },
              {
                headers: {
                  accessToken: cookie,
                },
              }
            )
            .then((result) => {
              console.log(result.data);
            })
            .catch(() => {});
        }}
      >
        글발행
      </button>

      <a href="/post/ ${id} /p/2" className="next">
        다음
      </a>
    </div>
  );
}
function WriteArticle(props) {
  const [cookies] = useCookies(["login"]);
  const cookie = cookies.login;
  return (
    <div className="wa">
      <div className="wrap articles">
        <form className="write">
          <p>
            <input
              onChange={(e) => {
                props.글제목작성(e.target.value);
                console.log(props.글제);
              }}
              name="title"
              autocomplete="off"
              placeholder="글 제목"
              className="title"
              type="text"
            ></input>
          </p>
          <textarea
            onChange={(i) => {
              props.글내용작성(i.target.value);
              console.log(props.글내);
            }}
            name="text"
            placeholder="에브"
            class="smallplaceholder"
          ></textarea>
          <input
            className="file"
            type="file"
            name="file"
            multiple="multiple"
          ></input>
          <ol className="thumbnails">
            <li className="new"></li>
          </ol>
          <div className="clearBothOnly"></div>
          <ul className="option" id="side">
            <li title="해시태그" className="hashtag"></li>
            <li title="첨부" className="attach"></li>
            <li
              onClick={() => {
                axios
                  .post(
                    "/api/v1/post",
                    {
                      title: props.글제,
                      content: props.글내,
                      category: "자유게시판",
                      anonymous: true,
                    },
                    {
                      headers: {
                        accessToken: cookie,
                      },
                    }
                  )
                  .then((result) => {
                    console.log(result.data);
                  })
                  .catch(() => {
                    console.log("실패");
                  });
              }}
              title="완료"
              className="submit"
            ></li>
            <li title="익명" className="anonym"></li>
            <li title="질문" className="question"></li>
          </ul>

          <div class="clearBothOnly"></div>
        </form>
      </div>
    </div>
  );
}
function Test(props) {
  return (
    <>
      <a
        onClick={() => {
          props.setWrite(true);
          props.setNew(false);
        }}
        id="writeArticleButton"
      >
        새 글을 작성해주세요!
      </a>
    </>
  );
}
export { PostList };
