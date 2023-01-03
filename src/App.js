import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Login from "./routes/Login.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar bg="white" variant="white">
        <Container>
          <Nav className="me-auto" id="main-bar">
            <Nav.Link className="main_logo" onClick={() => {}}>
              <img
                src={process.env.PUBLIC_URL + "main_logo.png"}
                width="60%"
              ></img>
            </Nav.Link>
            <span className="main_msg">
              <div className="everytime">에브리타임</div>
              <div className="main_school">동의대</div>
            </span>

            <Nav.Link className="link" onClick={() => {}}>
              게시판
            </Nav.Link>
            <Nav.Link className="link" href="#pricing">
              강의실
            </Nav.Link>
            <Nav.Link className="link" onClick={() => {}}>
              학점계산기
            </Nav.Link>
            <Nav.Link className="link" onClick={() => {}}>
              친구
            </Nav.Link>
            <Nav.Link className="link" onClick={() => {}}>
              책방
            </Nav.Link>
            <Nav.Link className="link" onClick={() => {}}>
              캠퍼스픽
            </Nav.Link>
            <Nav.Link onClick={() => {}}>
              {" "}
              <img
                src={process.env.PUBLIC_URL + "message.png"}
                width="60%"
              ></img>
            </Nav.Link>
            <Nav.Link onClick={() => {}}>
              {" "}
              <img
                src={process.env.PUBLIC_URL + "friends.png"}
                width="60%"
              ></img>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="wrap">
        <div className="divivder"></div>
        <div className="group">
          <ul>
            <li>
              <a href="/389150" data-id="389150" class="new">
                자유게시판
              </a>
            </li>
            <li>
              <a href="/259143" data-id="259143" class="new">
                비밀게시판
              </a>
            </li>
            <li>
              <a href="/389426" data-id="389426" class="new">
                졸업생게시판
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
        <div className="divivder"></div>
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
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
