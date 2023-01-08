import "../App.css";
import App, { Top, Bottom, Wrap } from "../App.js";
import Login from "./Login.js";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function Friends() {
  return (
    <div className="friends">
      <div>
        <Top></Top>
        <div id="friends_bd">
          <div id="container" class="friend">
            <input
              type="text"
              name="userid"
              placeholder="아이디 혹은 이메일 검색으로 친구 요청"
              autocomplete="off"
            />
            <div class="friendlist">
              <a href="/friends/1" class="friend">
                <h3>김도연</h3>
              </a>
              <a href="/@F8CG9RpMsykiR5lbTReO" class="friend">
                <h3>김민준</h3>
              </a>
              <a href="/@tLsKAdu8e3F1mAg2V6DG" class="friend">
                <h3>김신영</h3>
              </a>
              <a href="/@Qyl11noPm985DdOohmej" class="friend">
                <h3>김진우</h3>
              </a>
              <a href="/@ChZlxBCxWpxwtvWjJ39w" class="friend">
                <h3>류재은</h3>
              </a>
              <a href="/@8Wj9V1oilPLMXoEN7g0U" class="friend">
                <h3>복세인</h3>
              </a>
              <a href="/@kvcrYcCJEC5UAcuWcEh6" class="friend">
                <h3>안재우</h3>
              </a>
              <a href="/@HFb7meo33tfSPMAZMjIQ" class="friend">
                <h3>이수혁</h3>
              </a>
              <a href="/@qJvj6Z6sxF8B2z4wC3Dw" class="friend">
                <h3>이창민</h3>
              </a>
              <a href="/@v9xI4mISpk3BdYZZmMgF" class="friend">
                <h3>조재범</h3>
              </a>
              <a href="/@walAxQjd9yZopvGGMLIL" class="friend">
                <h3>최동우</h3>
              </a>
              <a href="/@sf9WmIW5VT99pIon4W2B" class="friend">
                <h3>최성우</h3>
              </a>
            </div>
          </div>
          <Bottom></Bottom>
        </div>
      </div>
    </div>
  );
}

export default Friends;
