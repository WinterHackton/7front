import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Aside.css";

const RightAside = props => {
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
            <Link to="/">실시간 인기 글</Link>
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
      <div className="right_card">
        <div className="right_board">
          <h3>
            <Link to="/">실시간 인기 글</Link>
          </h3>
          <Link to="/" className="right_article" onClick={() => {
            axios.get('http://52.78.246.206:8080/api/v1/member')
              .then((result) => {
                console.log(result.data)

              })
          }}>
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
  title : '아무제목'
}
export default RightAside;