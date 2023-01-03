import { useEffect, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useParams } from "react-router-dom";
<<<<<<< HEAD
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import "./Login.css";
=======
>>>>>>> 3cbdf2e7350be6d443b9511fc9d6adb7d1d32aab
import "../App.css";

function Login() {
  return (
<<<<<<< HEAD

    <div className="login_form">
      <h1 className="logo">
        <img src={process.env.PUBLIC_URL + "index.login.logo.png"} />
      </h1>
      <form action="/user/login" method="post">
        <p className="input">
          <input placeholder="아이디"></input>
        </p>
        <p className="input">
          <input placeholder="비밀번호"></input>
        </p>

        <p className="submit">
          <button type="submit" className="loginBtn">로그인</button>
        </p>
        <label className="autologin">
          <input type="checkbox" name="autologin" value="1"></input>
          로그인 유지
        </label>
        <p className="find"><a href="/forgot">아이디/비밀번호 찾기</a></p>
        <p className="register">
          <span>에브리타임에 처음이신가요?</span>
          <a href="/register">회원가입</a>
        </p>
      </form>
=======
    <div className="container">
      <div className="alert alert-warning">2초이내 구입시 할인</div>
>>>>>>> 3cbdf2e7350be6d443b9511fc9d6adb7d1d32aab
    </div>
  );
}

export default Login;
<<<<<<< HEAD

=======
>>>>>>> 3cbdf2e7350be6d443b9511fc9d6adb7d1d32aab
