import React from "react"
import "./home.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import axios from 'axios'
import RightAside from "./components/Aside";
import { Top, Wrap, Bottom } from "./App";

const Home = () => {
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
                  <a href="/user/logout">로그아웃</a>
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
        </article>
        
        <RightAside title="React 첫번 째 컴포넌트 공부" />;
      </div>
      <Bottom></Bottom>
    </div>
  )
} 

export default Home;