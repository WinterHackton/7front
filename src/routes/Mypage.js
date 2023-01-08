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
        <Link to="/mypage/email">학교 인증</Link>
      </div>
    </div>
  );
};


export default Mypage;


/**
 * 회원가입 또는 로그인 폼을 보여 줍니다.
 */

