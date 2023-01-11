import React, { useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Top } from "../App.js";
import "./Mypage.css";

const Email = () => {
  const [cookies, setCookie] = useCookies(["login"]);
  let [code, codeChange] = useState('');
  const navigate = useNavigate();
  let [email, emailChange] = useState("");
  const cookie = cookies.login;

  return (
    <div>
      <Top></Top>
      <div className="container my">
        <section className="my-desc email-desc">
          <div className="my-title">
            <h1>이메일 인증</h1>
          </div>
          <div>

            <input
              type="text"
              className="email-input"
              placeholder="이메일"
              onChange={(e) => {
              emailChange(e.target.value);
            }} />
            <button
              className="email-btn"
              onClick={() => {
                axios
                  .post(
                    "/api/v1/member/email",
                    {
                      email: email,
                    },
                    {
                      headers: {
                        accessToken: cookie,
                      },
                    }
                  )
                  .then((res) => {
                    console.log(res.data);
                    alert("인증번호가 전송되었습니다.")
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              인증번호 요청
            </button>
          </div>
          <form>
            <input
              className="email-input"
              type="text"
              placeholder="인증번호"
              onChange={(e) => {
                codeChange(e.target.value);
              }}
            ></input>
          </form>
          <button
            className="email-btn"
            onClick={() => {
              axios
                .post(
                  "/api/v1/member/email/check",
                  {
                    code: code,
                  },
                  {
                    headers: {
                      accessToken: cookie,
                    },
                  }
                )
                .then((res) => {
                  console.log(res.data);
                  navigate("/home");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            제출
          </button>
        </section>
      </div>
    </div>
  );
};

export default Email;

/**
 * 회원가입 또는 로그인 폼을 보여 줍니다.
 */
