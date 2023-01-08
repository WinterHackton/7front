import "./main.css";
import App, { Top, Bottom, Wrap } from "../App.js";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import RightAside from "../components/Aside";

function Main() {
  let [picture, setPicture] = useState(1);
  const [cookies, setCookie, removeCookie] = useCookies(['login']);
  const [is_login, setIsLogin] = React.useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setPicture(picture + 1);
    }, 1500);
    picture == 3 ? setPicture(1) : console.log(picture);
  });
<<<<<<< HEAD
  useEffect(() => {
    const cookie = cookies.login;
    if (cookie) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });
  const handleLogout = () => {
    removeCookie('login');    // 쿠키삭제후
    navigate('/home');
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
                className="default_img"></img>
              <p className="nickname">동산벌</p>
              <p className="school">김진우</p>
              <p className="school">zaqaz113</p>
              <div className="buttons">
                <a href="/my">내 정보</a>
                <a href="/home" onClick={handleLogout}>로그아웃</a>
              </div>
            </div>

            <div className="left_card">
              <div className="menus">
                <a href="/myarticle" className="myarticle">내가 쓴 글</a>
                <a href="/mycommentarticle" className="mycommentarticle">댓글 단 글</a>
                <a href="/myscrap" className="myscrap">내 스크랩</a>
              </div>
            </div>

            <div className="left_banner">
              <div className="banner">
                <Link to="/"><img
                  src={process.env.PUBLIC_URL + "homecard_230101.png"}
                  className="banner_img"></img></Link>
              </div>
            </div>
            <div className="left_banner">
              <div className="banner">
                <Link to="/"><img
                  src={process.env.PUBLIC_URL + "20230102_mars_internship_card.png"}
                  className="banner_img"></img></Link>
              </div>
            </div>
            <div className="left_banner">
              <div className="banner">
                <Link to="/"><img
                  src={process.env.PUBLIC_URL + "20230102_univstore_locomotive_card.jpg"}
                  className="banner_img"></img></Link>
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
                    <Link to="/">자유게시판</Link>
                  </h3>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                </div>
              </div>
            </div>
            <div className="desc_main">
              <div className="desc_card">
                <div className="desc_board">
                  <h3>
                    <Link to="/">자유게시판</Link>
                  </h3>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                </div>
              </div>
            </div>
            <div className="desc_main">
              <div className="desc_card">
                <div className="desc_board">
                  <h3>
                    <Link to="/">자유게시판</Link>
                  </h3>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                </div>
              </div>
            </div>
            <div className="desc_main">
              <div className="desc_card">
                <div className="desc_board">
                  <h3>
                    <Link to="/">자유게시판</Link>
                  </h3>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                </div>
              </div>
            </div>
            <div className="desc_main">
              <div className="desc_card">
                <div className="desc_board">
                  <h3>
                    <Link to="/">자유게시판</Link>
                  </h3>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                </div>
              </div>
            </div>
            <div className="desc_main">
              <div className="desc_card">
                <div className="desc_board">
                  <h3>
                    <Link to="/">자유게시판</Link>
                  </h3>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                </div>
              </div>
            </div>
            <div className="desc_main">
              <div className="desc_card">
                <div className="desc_board">
                  <h3>
                    <Link to="/">자유게시판</Link>
                  </h3>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                </div>
              </div>
            </div>
            <div className="desc_main">
              <div className="desc_card">
                <div className="desc_board">
                  <h3>
                    <Link to="/">자유게시판</Link>
                  </h3>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                  <span><Link to="/"><time>3분 전</time><p>안녕하세요 방학입니다.</p></Link></span>
                </div>
              </div>
            </div>
          </article>

          <RightAside title="React 첫번 째 컴포넌트 공부" />;
        </div>
        <Bottom></Bottom>
      </div>
    );
  } return (
=======

  return (
>>>>>>> da0b72336a37a6b4965b5a22b43b852288d1f6a2
    <div classmame="main" id="main">
      <asdie id="asdie_main">
        <div className="login">
          <a href="/" className="logo">
            <img src={process.env.PUBLIC_URL + "main_logo.png"} />
          </a>
          <a href="/login" className="button login">
            로그인
          </a>
          <a href="/account" className="button register">
            에브리타임 회원가입
          </a>
          <p className="find">
            <a href="/forgot">아이디/비밀번호 찾기</a>
          </p>
        </div>
        <form className="search">
          <p>우리 학교 커뮤니티 둘러보기</p>
          <input
            type="text"
            name="name"
            placeholder="찾으시는 캠퍼스를 검색하세요."
            autocomplete="off"
          />
        </form>
        <div className="campuslist">
          <a href="https://khu.everytime.kr">
            <span className="name">경희대</span>
            <span className="count">49,288명</span>
          </a>
          <a href="https://cau.everytime.kr">
            <span className="name">중앙대</span>
            <span className="count">44,487명</span>
          </a>
          <a href="https://yonsei.everytime.kr">
            <span className="name">연세대 신촌캠</span>
            <span className="count">42,972명</span>
          </a>
          <a href="https://knu.everytime.kr">
            <span className="name">경북대</span>
            <span className="count">41,652명</span>
          </a>
          <a href="https://skku.everytime.kr">
            <span className="name">성균관대</span>
            <span className="count">40,947명</span>
          </a>
          <a href="https://pusan.everytime.kr">
            <span className="name">부산대</span>
            <span className="count">39,747명</span>
          </a>
          <a href="https://korea.everytime.kr">
            <span className="name">고려대 서울캠</span>
            <span className="count">38,939명</span>
          </a>
          <a href="https://snu.everytime.kr">
            <span className="name">서울대</span>
            <span className="count">38,101명</span>
          </a>
          <a href="https://dankook.everytime.kr">
            <span className="name">단국대</span>
            <span className="count">37,955명</span>
          </a>
        </div>
      </asdie>
      <section className="init">
        <div className="wrap3">
          <h1>
            대학 생활을 더 편하고 즐겁게,
            <br />
            <strong>에브리타임</strong>
          </h1>
          <div className="stores">
            <a href="/page/mlink?lid=web_about&amp;store=playstore">
              <img
                src={process.env.PUBLIC_URL + "google.png"}
                alt="에브리타임 - Play Store - Google"
              />
            </a>
            <a href="/page/mlink?lid=web_about&amp;store=appstore">
              <img
                src={process.env.PUBLIC_URL + "apple.png"}
                alt="에브리타임 - AppStore - Apple"
              />
            </a>
          </div>

          <div className="device active">
            <div className="screen">
              <div className="image home" id="image_home">
                <img src={process.env.PUBLIC_URL + picture + ".png"} />
              </div>
              <div className="image timetable"></div>
              <div className="image board"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="service white">
        <h2>
          350만 대학생을 위한
          <br />
          <strong>국내 1위 대학생 서비스 에브리타임!</strong>
        </h2>
        <div className="paragraph">
          <p>
            시간표 작성, 수업 일정 및 할일 등 편리한 <strong>학업 관리</strong>
            가 가능하고,
            <br />
            학식 등 유용한 <strong>학교 생활 정보</strong>를 접할 수 있으며,
            <br />
            같은 캠퍼스의 학생들과 소통하는 <strong>익명 커뮤니티</strong>를
            이용할 수 있습니다.
          </p>
        </div>
        <div className="figures">
          <div>
            <p className="number">
              <strong data-number="614">614</strong>
              <span>만</span>
            </p>
            <p className="description">가입한 대학생</p>
          </div>
          <hr></hr>
          <div>
            <p className="number">
              <strong data-number="3633">3,633</strong>
              <span>만</span>
            </p>
            <p className="description">만들어진 시간표</p>
          </div>
          <hr></hr>
          <div>
            <p className="number">
              <strong data-number="585">585</strong>
              <span>만</span>
            </p>
            <p className="description">강의평/시험정보</p>
          </div>
          <hr></hr>
          <div>
            <p className="number">
              <strong data-number="233">233</strong>
              <span>만</span>
            </p>
            <p className="description">중고 거래된 책</p>
          </div>
          <hr></hr>
          <div>
            <p className="number">
              <strong data-number="15">15</strong>
              <span>억</span>
              <strong data-number="8489">8,489</strong>
              <span>만</span>
            </p>
            <p className="description">작성된 게시물</p>
          </div>
        </div>
      </section>
      <section className="community">
        <h2>
          전국 397개 캠퍼스
          <br />
          <strong>재학생 커뮤니티 에브리타임!</strong>
        </h2>
        <div className="paragraph">
          <p>
            학교 인증을 거친 재학생들의 안전한 대화를 위한{" "}
            <strong>익명 시스템</strong>과<br />
            학생들이 직접 게시판을 개설하여 운영하는{" "}
            <strong>커뮤니티 플랫폼</strong>을 통해
            <br />
            많은 대학교에서 가장 활발히 이용하는 재학생 커뮤니티로
            자리잡았습니다.
          </p>
        </div>
        <div class="figures active">
          <div>
            <p class="icon">
              <img src={process.env.PUBLIC_URL + "lock.png"} />
            </p>
            <p class="description">철저한 학교 인증</p>
          </div>
          <div>
            <p class="icon">
              <img src={process.env.PUBLIC_URL + "x.png"} />
            </p>
            <p class="description">완벽한 익명 시스템</p>
          </div>
          <div>
            <p class="icon">
              <img src={process.env.PUBLIC_URL + "user.png"} />
            </p>
            <p class="description">재학생 운영 게시판</p>
          </div>
        </div>
      </section>
      <div id="main_footer">
        <Bottom></Bottom>
      </div>
    </div>
  )
}
export default Main;
