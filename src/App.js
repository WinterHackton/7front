import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect, useState } from "react";
import Category from "./components/category";
import Login from "./routes/Login.js";
import Account from "./routes/Account.js";
import Post from "./routes/Post.js";
import Home from "./Home.js";
import Friends from "./routes/friends.js";
import Friends_detail from "./routes/friend-detail.js";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Register from './routes/Register.js';
import { getCookie, deleteCookie } from "./routes/Cookie";


function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} exact={true} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
      <Route path="/account/register" element={<Register />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/friends/1" element={<Friends_detail />} />
      <Route path="/post" element={<Post />} />
      {/* <Route path="/account/agreement" element={<Agreement />} /> */}
    </Routes>

  );
}

function Top(props) {
  const [is_login, setIsLogin] = React.useState(false);
  useEffect(() => {

    // 쿠키를 가져오기
    let cookie = getCookie('id');
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
            <Link to="/login">
              로그인
            </Link>

            <Link to="/account">
              회원가입
            </Link>
          </div>
        </Nav>
      </div>
    );
  } return (
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
          <Link to="/" className="nav-message">
          </Link>

          <Link to="/" className="nav-mypage">
          </Link>
        </div>
      </Nav>
    </div>
  )

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
  let [categorys] = useState(Category)
  return (
    <div id="submenu">
      <div className="submenu-wrap">
        <div className="divider"></div>
        <div className="group">
          <ul>
            <li>
              <a href="/389150" data-id="389150" class="new">
                {categorys[0].title}
              </a>
            </li>
            <li>
              <a href="/259143" data-id="259143" class="new">
                {categorys[1].title}
              </a>
            </li>
            <li>
              <a href="/389426" data-id="389426" class="new">
                {categorys[2].title}
              </a>
            </li>
            <li>
              <a href="/389239" data-id="389239" class="new">
                새내기게시판
              </a>
            </li>
            <li>
              <a href="/482707" data-id="482707" class="new">
                시사·이슈
              </a>
            </li>
            <li>
              <a href="/389374" data-id="389374" class="new">
                장터게시판
              </a>
            </li>
            <li>
              <a href="/259145" data-id="259145">
                정보게시판
              </a>
            </li>
            <li>
              <a href="/367573" data-id="367573" class="new">
                홍보게시판
              </a>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div class="group">
          <ul>
            <li>
              <a href="/418900" data-id="418900">
                동아리·학회
              </a>
            </li>
          </ul>
        </div>
        <div class="divider"></div>
        <div class="group">
          <ul>
            <li>
              <a href="/389322" data-id="389322" class="new">
                취업·진로
              </a>
            </li>
          </ul>
        </div>
        <div class="divider"></div>
        <div class="group">
          <ul>
            <li>
              <a href="/506241" data-id="506241">
                공과대학 학생회
              </a>
            </li>
            <li>
              <a href="/514888" data-id="514888">
                상경대학 학생회
              </a>
            </li>
          </ul>
        </div>
        <div class="divider"></div>
        <div class="group">
          <ul>
            <li>
              <a href="/460174" data-id="460174" class="new">
                간호학과 게시판
              </a>
            </li>
            <li>
              <a href="/467495" data-id="467495" class="new">
                한의학과 게시판
              </a>
            </li>
          </ul>
        </div>
        <div class="divider"></div>
        <div class="group">
          <ul>
            <li>
              <a href="/397801" data-id="397801" class="new">
                어둠의 뽕나무숲
              </a>
            </li>
            <li>
              <a href="/401266" data-id="401266" class="new">
                게임 같이하실분~~
              </a>
            </li>
            <li>
              <a href="/423155" data-id="423155" class="new">
                🙏소원 비는곳🙏
              </a>
            </li>
            <li>
              <a href="/454992" data-id="454992" class="new">
                🏳️‍🌈❤️🧡💛💚💙💜🏳️‍🌈
              </a>
            </li>
            <li>
              <a href="/425922" data-id="425922" class="new">
                ❤️동의인 미팅 남자 소개 &amp; 여자 소개💙
              </a>
            </li>
            <li>
              <a href="/407935" data-id="407935" class="new">
                끝말잇기하는 게시판
              </a>
            </li>
            <li>
              <a href="/402204" data-id="402204">
                불꽃의 화풀이방
              </a>
            </li>
            <li>
              <a href="/449063" data-id="449063" class="new">
                🏋🏻헬스/운동 게시판🏋🏻‍♂️
              </a>
            </li>
          </ul>
        </div>
        <div class="divider"></div>
        <div class="group">
          <ul>
            <li>
              <a href="/378866" data-id="378866">
                덕질게시판
              </a>
            </li>
            <li>
              <a href="/457161" data-id="457161">
                애니게시판
              </a>
            </li>
            <li>
              <a href="/457311" data-id="457311">
                롤 게시판
              </a>
            </li>
            <li>
              <a href="/399384" data-id="399384" class="new">
                노래추천
              </a>
            </li>
            <li>
              <a href="/community/search" class="search">
                게시판 찾기
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { App as default, Top, Wrap, Bottom };