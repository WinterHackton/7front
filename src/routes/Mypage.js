import React, { useState } from 'react';
import { json, Link, useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie"
import axios from 'axios'
import { Top } from "../App.js";
import './Mypage.css'

const Mypage = () => {
  const [cookies, setCookie] = useCookies(["login"]);
  const navigate = useNavigate();
  let [id, idChange] = useState('');
  let [pw, pwChange] = useState('');
  let [nickname, nicknameChange] = useState('');
  let [name, nameChange] = useState('');
  let [school, schoolChange] = useState('');
  let [ad, adChange] = useState('');

  return (
    <div>
      <Top></Top>
      <div className='container my'>
        <section className='my-desc'>
          <div className='my-title'>
            <h1>내 정보</h1>
            <Link to="" className='my-logout'>로그아웃</Link>
          </div>
          <div className='my-profile'>
            <img src="/0.png" alt="" />
            <h3>zaqaz113</h3>
            <p>
              <span>김진우</span>/
              <span>동산벌</span>
            </p>
            <p>
              <span>동의대</span> <span>18</span>학번
            </p>
          </div>
        </section>
        <section className='my-desc'>
            <h2>계정</h2>
            <Link to="/mypage/email" className='my-item'>학교 인증</Link>
            <Link to="/home" className='my-item'>비밀번호 변경</Link>
          <Link to="/home" className='my-item'>이메일 변경</Link>
        </section>
        <section className='my-desc'>
          <h2>커뮤니티</h2>
          <Link to="/home" className='my-item'>닉네임 설정</Link>
          <Link to="/home" className='my-item'>이용 제한 내역</Link>
          <Link to="/home" className='my-item'>게시판 관리</Link>
          <Link to="/home" className='my-item'>커뮤니티 규칙</Link>
        </section>
        <section className='my-desc'>
          <h2>이용안내</h2>
          <Link to="/home" className='my-item'>문의하기</Link>
          <Link to="/home" className='my-item'>공지사항</Link>
          <Link to="/home" className='my-item'>서비스 이용약관</Link>
          <Link to="/home" className='my-item'>개인정보 처리방침</Link>
          <Link to="/home" className='my-item'>청소년 보호 정책</Link>
        </section>
        <section className='my-desc'>
          <h2>기타</h2>
          <Link to="/home" className='my-item'>정보 동의 설정</Link>
          <Link to="/home" className='my-item'>회원 탈퇴</Link>
        </section>
      </div>
    </div>
  );
};


export default Mypage;


/**
 * 회원가입 또는 로그인 폼을 보여 줍니다.
 */

