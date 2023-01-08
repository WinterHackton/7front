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
        <button
          onClick={() => {
            axios
              .post(
                "/api/v1/member/email",
                {
                  email: "zkakcnd@naver.com",
                },
                {
                  headers: {
                    accessToken: cookie,
                  },
                }
              )
              .then((res) => {
                console.log(res.data);
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
          type="text"
          onChange={(e) => {
            codeChange(e.target.value);
          }}
        ></input>
      </form>
      <button
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
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        제출
      </button>
    </div>
  );
};

export default Email;

/**
 * 회원가입 또는 로그인 폼을 보여 줍니다.
 */
