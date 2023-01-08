import React, { useState } from 'react';
import { json, Link, useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie"
import axios from 'axios'
import { Bottom } from "../App.js";
import './Login.css'
axios.defaults.withCredentials = true;

const Register = () => {
  const [cookies, setCookie] = useCookies(["login"]);
  const navigate = useNavigate();
  let [id, idChange] = useState('');
  let [pw, pwChange] = useState('');
  let [nickname, nicknameChange] = useState('');
  let [name, nameChange] = useState('');
  let [school, schoolChange] = useState('');
  let [ad, adChange] = useState('');

  return (

    <div className="login_form">
      <h1 className="logo">
        <img src={process.env.PUBLIC_URL + "index.login.logo.png"} />
      </h1>
      <form>
        <p className="input">
          <input placeholder="아이디" name="userId" autoComplete='userId' onChange={(e) => {
            idChange(e.target.value)
          }}></input>
        </p>
        <p className="input">
          <input placeholder="비밀번호" type="password" autoComplete="password"
            name="password" onChange={(e) => {
              pwChange(e.target.value)
            }}></input>
        </p>
        <div>
          {/* <p className="input">
            <input placeholder="비밀번호 확인" type="password" onChange={onChange} value={form.passwordConfirm} autoComplete="new-password"
              name="passwordConfirm"></input>
          </p> */}
          <p className="input">
            <input placeholder="닉네임" name="nickname" autoComplete='nickname' onChange={(e) => {
              nicknameChange(e.target.value)
              console.log(nickname)
            }}></input>
          </p>
          <p className="input">
            <input placeholder="이름" name="name" autoComplete='name' onChange={(e) => {
              nameChange(e.target.value)
            }}></input>
          </p>
          {/* <p className="input">
            <input placeholder="이메일" onChange={onChange} value={form.email} name="email" autoComplete='email'></input>
          </p> */}
          <p className="input">
            <input placeholder="학교" name="school" autoComplete='school' onChange={(e) => {
              schoolChange(e.target.value)
            }}></input>
          </p>
          <p className="input">
            <input placeholder="학번" name="admissionId" autoComplete='admissionId' onChange={(e) => {
              adChange(e.target.value)
            }}></input>
          </p>
        </div>

      </form>
        <p className="submit">
          {/* <button className="loginBtn" onClick={(e) => {
            e.preventDefault()
            fetch('http://every-time-clone.shop/api/v1/member/signup', {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                userId: id,
                password: pw,
                nickname: nickname,
                name: name,
                school: school,
                admissionId: ad
              })
            })
              .then(res => {
                console.log(res);
              })
              .catch(err => {
                console.log(err);
              })
          }}>회원가입</button> */}
        <button className="loginBtn" onClick={() => {
          axios.post('/api/v1/member/signup', {
            userId: id,
            password: pw,
            nickname: nickname,
            name: name,
            school: school,
            admissionId: ad
          })
            .then(() => {
              navigate('/login')
            })
            .catch((err) => {
            console.log(err)
          })
        }}>회원가입</button>
        </p>
      <Bottom></Bottom>
    </div>
  );
};


export default Register;


/**
 * 회원가입 또는 로그인 폼을 보여 줍니다.
 */

