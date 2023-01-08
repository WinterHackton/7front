import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect, useState } from "react";
import Category from "./category";
import Login from "./routes/Login.js";
import Account from "./routes/Account.js";
import Post from "./routes/Post.js";
import Home from "./Home.js";
import Main from "./routes/main.js";
import Friends from "./routes/friends.js";
import Friends_detail from "./routes/friend-detail.js";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Register from "./routes/Register.js";
import { useCookies } from "react-cookie";

function App() {
  let [categorys] = useState(Category);
  console.log(categorys[0].title);
  return (
    <Routes>
      <Route path="/" element={<Main />} exact={true} />
      <Route path="/home" element={<Home />} exact={true} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
      <Route path="/account/register" element={<Register />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/friends/1" element={<Friends_detail />} />
      <Route path="/post" element={<Post />} />
      <Route path="/post/:id" element={<Post />} />

      {/* <Route path="/account/agreement" element={<Agreement />} /> */}
    </Routes>
  );
}

function Top(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["login"]);

  const [is_login, setIsLogin] = React.useState(false);
  useEffect(() => {
    // 쿠키를 가져오기
    const cookie = cookies.login;
    // 확인
    console.log(cookie);
    // 쿠키가 있으면?
    if (cookie) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });
  if (is_login) {
    return (
      <div className="top">
        <Nav bg="white" variant="white" className="top-navbar">
          <Link to="/" className="nav-logo">
            <img
              src={process.env.PUBLIC_URL + "nav.logo.png"}
              width="60%"
            ></img>
          </Link>
          <span className="main_msg">
            <div className="everytime">에브리타임</div>
            <div className="main_school">동의대</div>
          </span>

          <ul id="nav-menu">
            <li>
              <Link to="/">게시판</Link>
            </li>
            <li>
              <Link to="/">시간표</Link>
            </li>
            <li>
              <Link to="/">강의실</Link>
            </li>
            <li>
              <Link to="/">학점계산기</Link>
            </li>
            <li>
              <Link to="/friends">친구</Link>
            </li>
            <li>
              <Link to="/">책방</Link>
            </li>
            <li>
              <Link to="/">캠퍼스픽</Link>
            </li>
          </ul>
          <div id="nav-account">
            <Link to="/" className="nav-message"></Link>

            <Link to="/" className="nav-mypage"></Link>
          </div>
        </Nav>
      </div>
    );
  }
  return (
    <div className="top">
      <Nav bg="white" variant="white" className="top-navbar">
        <Link to="/" className="nav-logo">
          <img src={process.env.PUBLIC_URL + "nav.logo.png"} width="60%"></img>
        </Link>
        <span className="main_msg">
          <div className="everytime">에브리타임</div>
          <div className="main_school">동의대</div>
        </span>

        <ul id="nav-menu">
          <li>
            <Link to="/">게시판</Link>
          </li>
          <li>
            <Link to="/">시간표</Link>
          </li>
          <li>
            <Link to="/">강의실</Link>
          </li>
          <li>
            <Link to="/">학점계산기</Link>
          </li>
          <li>
            <Link to="/friends">친구</Link>
          </li>
          <li>
            <Link to="/">책방</Link>
          </li>
          <li>
            <Link to="/">캠퍼스픽</Link>
          </li>
        </ul>
        <div id="nav-account">
          <Link to="/login">로그인</Link>

          <Link to="/account">회원가입</Link>
        </div>
      </Nav>
    </div>
  );
}
function Bottom() {
  return (
    <div className="bottom">
      <ul class="links">
        <li>
          <a href="/page/serviceagreement">이용약관</a>
        </li>
        <li className="privacy">
          <a href="/page/privacy">개인정보처리방침</a>
        </li>
        <li>
          <a href="/page/youthpolicy">청소년보호정책</a>
        </li>
        <li>
          <a href="/page/rules">커뮤니티이용규칙</a>
        </li>
        <li>
          <a href="/notice">공지사항</a>
        </li>
        <li>
          <a href="/page/faq">문의하기</a>
        </li>
        <li className="copyright">
          <a href="/">© 에브리타임</a>
        </li>
      </ul>
    </div>
  );
}
function Wrap() {
  let [categorys] = useState(Category);
  console.log(categorys[0].title);
  return (
    <div id="submenu">
      <div className="submenu-wrap">
        <div className="divider"></div>
        <div className="group">
          <ul>
            <li>
              <a href="/post/0" data-id="389150" class="new">
                {categorys[0].title}
              </a>
            </li>
            <li>
              <a href="/post/1" data-id="389150" class="new">
                {categorys[1].title}
              </a>
            </li>
            <li>
              <a href="/post/2" data-id="389150" class="new">
                {categorys[2].title}
              </a>
            </li>
            <li>
              <a href="/post/3" data-id="389150" class="new">
                {categorys[3].title}
              </a>
            </li>
            <li>
              <a href="/post/4" data-id="389150" class="new">
                {categorys[4].title}
              </a>
            </li>
            <li>
              <a href="/post/5" data-id="389150" class="new">
                {categorys[5].title}
              </a>
            </li>
            <li>
              <a href="/post/6" data-id="389150" class="new">
                {categorys[6].title}
              </a>
            </li>
            <li>
              <a href="/post/7" data-id="389150" class="new">
                {categorys[7].title}
              </a>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div class="group">
          <ul>
            <li>
              <a href="/post/8" data-id="389150" class="new">
                {categorys[8].title}
              </a>
            </li>
          </ul>
        </div>
        <div class="divider"></div>
        <div class="group">
          <ul>
            <li>
              <a href="/post/9" data-id="389150" class="new">
                {categorys[9].title}
              </a>
            </li>
          </ul>
        </div>
        <div class="divider"></div>
        <div class="group">
          <ul>
            <li>
              <a href="/post/10" data-id="389150" class="new">
                {categorys[10].title}
              </a>
            </li>
            <li>
              <a href="/post/11" data-id="389150" class="new">
                {categorys[11].title}
              </a>
            </li>
          </ul>
        </div>
        <div class="divider"></div>
        <div class="group">
          <ul>
            <li>
              <a href="/post/12" data-id="389150" class="new">
                {categorys[12].title}
              </a>
            </li>
            <li>
              <a href="/post/13" data-id="389150" class="new">
                {categorys[13].title}
              </a>
            </li>
          </ul>
        </div>
        <div class="divider"></div>
        <div class="group">
          <ul>
            <li>
              <a href="/post/14" data-id="389150" class="new">
                {categorys[14].title}
              </a>
            </li>
            <li>
              <a href="/post/15" data-id="389150" class="new">
                {categorys[15].title}
              </a>
            </li>
            <li>
              <a href="/post/16" data-id="389150" class="new">
                {categorys[16].title}
              </a>
            </li>
            <li>
              <a href="/post/17" data-id="389150" class="new">
                {categorys[17].title}
              </a>
            </li>
            <li>
              <a href="/post/18" data-id="389150" class="new">
                {categorys[18].title}
              </a>
            </li>
            <li>
              <a href="/post/19" data-id="389150" class="new">
                {categorys[19].title}
              </a>
            </li>
            <li>
              <a href="/post/20" data-id="389150" class="new">
                {categorys[20].title}
              </a>
            </li>
            <li>
              <a href="/post/21" data-id="389150" class="new">
                {categorys[21].title}
              </a>
            </li>
          </ul>
        </div>
        <div class="divider"></div>
        <div class="group">
          <ul>
            <li>
              <a href="/post/22" data-id="389150" class="new">
                {categorys[22].title}
              </a>
            </li>
            <li>
              <a href="/post/23" data-id="389150" class="new">
                {categorys[23].title}
              </a>
            </li>
            <li>
              <a href="/post/24" data-id="389150" class="new">
                {categorys[24].title}
              </a>
            </li>
            <li>
              <a href="/post/25" data-id="389150" class="new">
                {categorys[25].title}
              </a>
            </li>
            <li>
              <a href="/post/26" data-id="389150" class="new">
                {categorys[26].title}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export { App as default, Top, Wrap, Bottom };
