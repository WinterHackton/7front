import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

/**
 * 회원가입 또는 로그인 폼을 보여 줍니다.
 */

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  return (

    <div className="login_form">
      <h1 className="logo">
        <img src={process.env.PUBLIC_URL + "index.login.logo.png"} />
      </h1>
      <form action="/user/login" method="post" onSubmit={onSubmit}>
        <p className="input">
          <input placeholder="아이디" onChange={onChange} value={form.id} name="id" autoComplete='id'></input>
        </p>
        <p className="input">
          <input placeholder="비밀번호" type="password" onChange={onChange} value={form.password} autoComplete="new-password"
            name="password"></input>
        </p>
        {type === 'register' && (
          <div>
            <p className="input">
              <input placeholder="비밀번호 확인" type="password" onChange={onChange} value={form.passwordConfirm} autoComplete="new-password"
              name="passwordConfirm"></input>
            </p>
            <p className="input">
              <input placeholder="닉네임" onChange={onChange} value={form.nickname} name="nickname" autoComplete='nickname'></input>
            </p>
            <p className="input">
              <input placeholder="이름" onChange={onChange} value={form.name} name="name" autoComplete='name'></input>
            </p>
          </div>
        )}

        <p className="submit">
          <button type="submit" className="loginBtn" onClick={() => {
            axios.get('http://52.78.246.206:8080/api/v1/member')
              .then((data) => { console.log(data) })
          }}>{text}</button>
        </p>
        <label className="autologin">
          <input type="checkbox" name="autologin" value="1"></input>
          로그인 유지
        </label>
      </form>
      {type === "login" ?? (
        <footer>
          <p className="find"><Link to="/forgot">아이디/비밀번호 찾기</Link></p>
          <p className="register">
            <span>에브리타임에 처음이신가요?</span>
            <Link to="/account">회원가입</Link>
          </p>
        </footer>
      )}
    </div>
  );
};

export default AuthForm;