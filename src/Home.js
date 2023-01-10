import React, { useEffect, useState } from "react";
import "./home.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import RightAside from "./components/Aside";
import { Top, Wrap, Bottom } from "./App";
import { useCookies } from "react-cookie";
import Category from "./category";

const Home = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["login"]);
  const navigate = useNavigate();
  const [is_login, setIsLogin] = React.useState(false);
  const cookie = cookies.login;
  let [categorys] = useState(Category);
  let [main1, setMain1] = useState([]);
  let [main2, setMain2] = useState([]);
  let [main3, setMain3] = useState([]);
  let [main4, setMain4] = useState([]);
  let [main5, setMain5] = useState([]);
  let [main6, setMain6] = useState([]);
  let [article, setArticle] = useState([]);

  let count = [
    "freedomPostDtos",
    "secretPostDtos",
    "graduatePostDtos",
    "freshmanPostDtos",
    "issuePostDtos",
    "marketplacePostDtos",
    "secretPostDtos",
  ];
  let count1 = [0, 1, 2, 3];
  useEffect(() => {
    axios.get("api/v1/post/main").then((result) => {
      setMain1(result.data.freedomPostDtos);
      let copy2 = result.data.secretPostDtos;
      setMain2(copy2);
      let copy3 = result.data.graduatePostDtos;
      setMain3(copy3);
      let copy4 = result.data.issuePostDtos;
      setMain4(copy4);
      let copy5 = result.data.marketplacePostDtos;
      setMain5(copy5);
      let copy6 = result.data.secretPostDtos;
      setMain6(copy6);
    });
  });

  useEffect(() => {
    const cookie = cookies.login;
    if (cookie) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });
  const handleLogout = () => {
    removeCookie("login"); // 쿠키삭제후
    navigate("/home");
  };
  if (is_login) {
    return (
      <div className="App">
        <Top></Top>
        <Wrap></Wrap>

        <div className="container container_desc">
          <aside className="left_aside">
            <div className="left_profile">
              <img
                src={process.env.PUBLIC_URL + "0.png"}
                className="default_img"
              ></img>
              <p className="nickname">동산벌</p>
              <p className="school">김진우</p>
              <p className="school">zaqaz113</p>
              <div className="buttons">
                <a href="/my">내 정보</a>
                <a href="/home" onClick={handleLogout}>
                  로그아웃
                </a>
              </div>
            </div>

            <div className="left_card">
              <div className="menus">
                <a href="/myarticle" className="myarticle">
                  내가 쓴 글
                </a>
                <a href="/mycommentarticle" className="mycommentarticle">
                  댓글 단 글
                </a>
                <a href="/myscrap" className="myscrap">
                  내 스크랩
                </a>
              </div>
            </div>

            <div className="left_banner">
              <div className="banner">
                <Link to="/">
                  <img
                    src={process.env.PUBLIC_URL + "homecard_230101.png"}
                    className="banner_img"
                  ></img>
                </Link>
              </div>
            </div>
            <div className="left_banner">
              <div className="banner">
                <Link to="/">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "20230102_mars_internship_card.png"
                    }
                    className="banner_img"
                  ></img>
                </Link>
              </div>
            </div>
            <div className="left_banner">
              <div className="banner">
                <Link to="/">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "20230102_univstore_locomotive_card.jpg"
                    }
                    className="banner_img"
                  ></img>
                </Link>
              </div>
            </div>
          </aside>
          <article className="center_desc">
            <img
              src={
                process.env.PUBLIC_URL + "20230103_tripstore_main_A_home.png"
              }
            ></img>

            <div className="desc_main">
              <div className="desc_card">
                <div className="desc_board">
                  <h3>
                    <Link to="/">{categorys[0].title}</Link>
                  </h3>
                  {main1.map(function (a, i) {
                    return (
                      <span>
                        <Link to="/">
                          <time>3분 전</time>
                          <p>{main1[i].title}</p>
                        </Link>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="desc_main">
              <div className="desc_card">
                <div className="desc_board">
                  <h3>
                    <Link to="/">{categorys[1].title}</Link>
                  </h3>
                  {main2.map(function (a, i) {
                    return (
                      <span>
                        <Link to="/">
                          <time>3분 전</time>
                          <p>{main2[i].content}</p>
                        </Link>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="desc_main">
              <div className="desc_card">
                <div className="desc_board">
                  <h3>
                    <Link to="/">{categorys[2].title}</Link>
                  </h3>
                  {main3.map(function (a, i) {
                    return (
                      <span>
                        <Link to="/">
                          <time>3분 전</time>
                          <p>{main3[i].content}</p>
                        </Link>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="desc_main">
              <div className="desc_card">
                <div className="desc_board">
                  <h3>
                    <Link to="/">{categorys[3].title}</Link>
                  </h3>
                  {main4.map(function (a, i) {
                    return (
                      <span>
                        <Link to="/">
                          <time>3분 전</time>
                          <p>{main4[i].content}</p>
                        </Link>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="desc_main">
              <div className="desc_card">
                <div className="desc_board">
                  <h3>
                    <Link to="/">{categorys[4].title}</Link>
                  </h3>
                  {main5.map(function (a, i) {
                    return (
                      <span>
                        <Link to="/">
                          <time>3분 전</time>
                          <p>{main5[i].content}</p>
                        </Link>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="desc_main">
              <div className="desc_card">
                <div className="desc_board">
                  <h3>
                    <Link to="/">{categorys[5].title}</Link>
                  </h3>
                  {main6.map(function (a, i) {
                    return (
                      <span>
                        <Link to="/">
                          <time>3분 전</time>
                          <p>{main6[i].content}</p>
                        </Link>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </article>
          <RightAside title="React 첫번 째 컴포넌트 공부" />;
        </div>
        <Bottom></Bottom>
      </div>
    );
  }
  return (
    <div className="App">
      <Top></Top>
      <Wrap></Wrap>

      <div className="container container_desc">
        <aside className="left_aside">
          <div className="left_profile left_form">
            <h3 className="left_profile_desc">
              커뮤니티 이용을 위해
              <br />
              <strong>로그인</strong>이 필요합니다!
            </h3>
            <Link to="/login" className="button_login">
              로그인
            </Link>
            <Link to="/account" className="button_register">
              에브리타임 회원가입
            </Link>
          </div>

          <div className="left_banner">
            <div className="banner">
              <Link to="/">
                <img
                  src={process.env.PUBLIC_URL + "homecard_230101.png"}
                  className="banner_img"
                ></img>
              </Link>
            </div>
          </div>
          <div className="left_banner">
            <div className="banner">
              <Link to="/">
                <img
                  src={
                    process.env.PUBLIC_URL + "20230102_mars_internship_card.png"
                  }
                  className="banner_img"
                ></img>
              </Link>
            </div>
          </div>
          <div className="left_banner">
            <div className="banner">
              <Link to="/">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "20230102_univstore_locomotive_card.jpg"
                  }
                  className="banner_img"
                ></img>
              </Link>
            </div>
          </div>
        </aside>
        <article className="center_desc">
          <img
            src={process.env.PUBLIC_URL + "20230103_tripstore_main_A_home.png"}
          ></img>
          <div className="desc_main">
            <div className="desc_card">
              <div className="desc_board">
                <h3>
                  <Link to="/">{categorys[0].title}</Link>
                </h3>
                {main1.map(function (a, i) {
                  return (
                    <span>
                      <Link to="/">
                        <time>3분 전</time>
                        <p>{main1[i].title}</p>
                      </Link>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="desc_main">
            <div className="desc_card">
              <div className="desc_board">
                <h3>
                  <Link to="/Login">비밀게시판</Link>
                </h3>
                <div className="needauth">
                  <p>
                    로그인을 한 학생들만
                    <br />
                    이용할 수 있어요!
                  </p>
                  <Link to="/login" class="needauth_btn">
                    로그인
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="desc_main">
            <div className="desc_card">
              <div className="desc_board">
                <h3>
                  <Link to="/Login">졸업생게시판</Link>
                </h3>
                <div className="needauth">
                  <p>
                    로그인을 한 학생들만
                    <br />
                    이용할 수 있어요!
                  </p>
                  <Link to="/login" class="needauth_btn">
                    로그인
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="desc_main">
            <div className="desc_card">
              <div className="desc_board">
                <h3>
                  <Link to="/">{categorys[2].title}</Link>
                </h3>
                {main3.map(function (a, i) {
                  return (
                    <span>
                      <Link to="/">
                        <time>3분 전</time>
                        <p>{main3[i].content}</p>
                      </Link>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="desc_main">
            <div className="desc_card">
              <div className="desc_board">
                <h3>
                  <Link to="/">{categorys[3].title}</Link>
                </h3>
                {main4.map(function (a, i) {
                  return (
                    <span>
                      <Link to="/">
                        <time>3분 전</time>
                        <p>{main4[i].content}</p>
                      </Link>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="desc_main">
            <div className="desc_card">
              <div className="desc_board">
                <h3>
                  <Link to="/">{categorys[3].title}</Link>
                </h3>
                {main5.map(function (a, i) {
                  return (
                    <span>
                      <Link to="/">
                        <time>3분 전</time>
                        <p>{main5[i].content}</p>
                      </Link>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </article>
        <RightAside title="React 첫번 째 컴포넌트 공부" />;
      </div>
      <Bottom></Bottom>
    </div>
  );
};

export default Home;
