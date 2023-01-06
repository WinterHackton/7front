import React, { useState } from 'react';
import { json, Link, useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie"
import axios from 'axios';
import { Bottom } from "../App.js";
import { setCookie } from "./Cookie";
import './Login.css'


const Login = () => {
  const [cookies, setCookie] = useCookies(["login"]);
  const navigate = useNavigate();
  let [id, idChange] = useState('');
  let [pw, pwChange] = useState('');

  return (

    <div className="login_form">
      <h1 className="logo">
        <img src={process.env.PUBLIC_URL + "index.login.logo.png"} />
      </h1>
      <form>
        <p className="input">
          <input placeholder="아이디" name="id" autoComplete='id' onChange={(e) => {
            idChange(e.target.value)
          }}></input>
        </p>
        <p className="input">
          <input placeholder="비밀번호" type="password"  autoComplete="new-password"
            name="password" onChange={(e)=>{
              pwChange(e.target.value)
            }}></input>
        </p>
      </form>
        <p className="submit">
          {/* <button className="loginBtn" onClick={() => {
            fetch('http://every-time-clone.shop/api/v1/member/login', {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                id: id,
                password: pw,
              })
            })
              .then(res => {
                const statusCode = res.status;
                res.json().then((data) => {
                  if (statusCode === 200) {
                    setCookie('id', data.accessToken)
                    navigate('/')
                    console.log(statusCode)
                    console.log(data.accessToken)
                  }
                })
              })
              .catch(err => {
                console.log(err);
              })
          }}>로그인</button> */}
        <button className="loginBtn" onClick={() => {
          axios.post('/api/v1/member/login', {
            userId: id,
            password: pw,
          })
            .then((res) => {
              console.log(res.data)
              setCookie("id", res.data.accessToken)
            })
            .catch((err) => {
              console.log(err)
            })
        }}>로그인</button>
        </p>
        <label className="autologin">
          <input type="checkbox" name="autologin" value="1"></input>
          로그인 유지
        </label>
      
      <footer>
        <p className="find"><Link to="/forgot">아이디/비밀번호 찾기</Link></p>
        <p className="register">
          <span>에브리타임에 처음이신가요?</span>
          <Link to="/account">회원가입</Link>
        </p>
      </footer>
      <Bottom></Bottom>
    </div>
  );
};


export default Login;