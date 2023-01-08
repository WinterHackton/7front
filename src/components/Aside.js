import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Aside.css";
import { useCookies } from "react-cookie";

const RightAside = props => {
  const [cookies, setCookie, removeCookie] = useCookies(['login']);

  const [is_login, setIsLogin] = React.useState(false);
  useEffect(() => {
    // 쿠키를 가져오기
    const cookie = cookies.login;
    if (cookie) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });
  if (is_login) {
    return (
      <aside className="right_aside post_right_aside">
        <form action="">
          <input className="right_aside_search" type="text" placeholder="전체 게시판의 글을 검색하세요!" />
        </form>
        <div className="right_card">
          <div className="right_board">
            <h3>
              <Link to="/">실시간 인기 글</Link>
            </h3>
            <Link to="/" className="right_article">
              <p>{props.title}</p>
              <h4>새내기 게시판</h4>
              <ul className="status">
                <li className="vote_active">31</li>
                <li className="comment_active">0</li>
              </ul>
            </Link>
            <Link to="/" className="right_article">
              <p>반갑습니다 abasdsafasfasdsadas</p>
              <h4>새내기 게시판</h4>
              <ul className="status">
                <li className="vote_active">31</li>
                <li className="comment_active">0</li>
              </ul>
            </Link>
          </div>
        </div>
        <div className="right_card">
          <div className="right_board">
            <h3>
              <Link to="/">실시간 인기 글<span>더 보기</span></Link>
            </h3>
            <Link to="/" className="right_article right_article_list">
              <time>01/07 14:18</time>
              <p id="right_article_list_desc">ddddddddddddddddddddddddd</p>
            </Link>
            <Link to="/" className="right_article right_article_list">
              <time>01/07 14:18</time>
              <p id="right_article_list_desc">ddddddddddddddddddddddddd</p>
            </Link>
            <Link to="/" className="right_article right_article_list">
              <time>01/07 14:18</time>
              <p id="right_article_list_desc">ddddddddddddddddddddddddd</p>
            </Link>
            <Link to="/" className="right_article right_article_list">
              <time>01/07 14:18</time>
              <p id="right_article_list_desc">ddddddddddddddddddddddddd</p>
            </Link>
          </div>
        </div>
        <div className="right_card">
          <div className="right_board">
            <h3>
              <Link to="/">BEST 게시판 <span>더 보기</span></Link>
            </h3>

          </div>
        </div>
        <div className="right_card">
          <div className="right_board">
            <h3>
              <Link to="/">실시간 인기 글 <span>더 보기</span></Link>
            </h3>
            <Link to="/" className="right_article">
              <p>반갑습니다 abasdsafasfasdsadas</p>
              <h4>새내기 게시판</h4>
              <ul className="status">
                <li className="vote_active">31</li>
                <li className="comment_active">0</li>
              </ul>
            </Link>
            <Link to="/" className="right_article">
              <p>반갑습니다 abasdsafasfasdsadas</p>
              <h4>새내기 게시판</h4>
              <ul className="status">
                <li className="vote_active">31</li>
                <li className="comment_active">0</li>
              </ul>
            </Link>
          </div>
        </div>
      </aside>
    )
  } return (
    <aside className="right_aside post_right_aside">
      <form action="">
        <input className="right_aside_search" type="text" placeholder="전체 게시판의 글을 검색하세요!" />
      </form>
      <div className="right_card">
        <div className="right_board">
          <h3>
            <Link to="/">실시간 인기 글</Link>
          </h3>
          <Link to="/" className="right_article">
            <p>{props.title}</p>
            <h4>새내기 게시판</h4>
            <ul className="status">
              <li className="vote_active">31</li>
              <li className="comment_active">0</li>
            </ul>
          </Link>
          <Link to="/" className="right_article">
            <p>반갑습니다 abasdsafasfasdsadas</p>
            <h4>새내기 게시판</h4>
            <ul className="status">
              <li className="vote_active">31</li>
              <li className="comment_active">0</li>
            </ul>
          </Link>
        </div>
      </div>
      <div className="right_card">
        <div className="right_board">
          <h3>
            <Link to="/">실시간 인기 글<span>더 보기</span></Link>
          </h3>
          <Link to="/" className="right_article right_article_list">
            <time>01/07 14:18</time>
            <p id="right_article_list_desc">로그인 후 이용가능</p>
          </Link>
          <Link to="/" className="right_article right_article_list">
            <time>01/07 14:18</time>
            <p id="right_article_list_desc">로그인 후 이용가능</p>
          </Link>
          <Link to="/" className="right_article right_article_list">
            <time>01/07 14:18</time>
            <p id="right_article_list_desc">로그인 후 이용가능</p>
          </Link>
          <Link to="/" className="right_article right_article_list">
            <time>01/07 14:18</time>
            <p id="right_article_list_desc">로그인 후 이용가능</p>
          </Link>
        </div>
      </div>
      <div className="right_card">
        <div className="right_board">
          <h3>
            <Link to="/">BEST 게시판 <span>더 보기</span></Link>
          </h3>

        </div>
      </div>
      <div className="right_card">
        <div className="right_board">
          <h3>
            <Link to="/">실시간 인기 글 <span>더 보기</span></Link>
          </h3>
          <Link to="/" className="right_article">
            <p>반갑습니다 abasdsafasfasdsadas</p>
            <h4>새내기 게시판</h4>
            <ul className="status">
              <li className="vote_active">31</li>
              <li className="comment_active">0</li>
            </ul>
          </Link>
          <Link to="/" className="right_article">
            <p>반갑습니다 abasdsafasfasdsadas</p>
            <h4>새내기 게시판</h4>
            <ul className="status">
              <li className="vote_active">31</li>
              <li className="comment_active">0</li>
            </ul>
          </Link>
        </div>
      </div>
    </aside>
  )
};

RightAside.defaultProps = {
  title: '아무제목'
}
export default RightAside;