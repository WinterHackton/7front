import "../App.css";
import App, { Top, Bottom, Wrap } from "../App.js";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function Friends_detail() {
  return (
    <div classmame="Friends_detail">
      <Top></Top>
      <div id="friends_d">
        <div id="container" className="timetable">
          <aside id="aside_friend">
            <div className="title">
              <h1>김도연</h1>
              <ol className="buttons threecols">
                <li>
                  <a id="friendRemove" className="light">
                    친구 삭제
                  </a>
                </li>
              </ol>
            </div>
            <div className="menu">
              <ol>
                <li className="active">
                  <a href="/@QF3zF9eGkXoZCAnvg2IB">2022년 2학기</a>
                </li>
                <li className="">
                  <a href="/@0eMID2tJRzWcKjC2SYFq">2022년 여름학기</a>
                </li>
                <li className="">
                  <a href="/@IF1IRFg8rXqSqiae6gYr">2022년 1학기</a>
                </li>
                <li className="">
                  <a href="/@PfWQy2IebxMcb9Z0xXeT">2021년 1학기</a>
                </li>
              </ol>
            </div>
          </aside>
          <div className="wrap1" style={{ width: "519px" }}>
            <div className="tablehead">
              <table className="tablehead">
                <tbody>
                  <tr>
                    <th></th>
                    <td>월</td>
                    <td>화</td>
                    <td>수</td>
                    <td>목</td>
                    <td>금</td>
                    <td style={{ display: "none" }}>토</td>
                    <td style={{ display: "none" }}>일</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="tablebody">
              <table className="tablebody">
                <tbody>
                  <tr>
                    <th>
                      <div className="times">
                        <div className="time">오전 0시</div>
                        <div className="time">오전 1시</div>
                        <div className="time">오전 2시</div>
                        <div className="time">오전 3시</div>
                        <div className="time">오전 4시</div>
                        <div className="time">오전 5시</div>
                        <div className="time">오전 6시</div>
                        <div className="time">오전 7시</div>
                        <div className="time">오전 8시</div>
                        <div className="time">오전 9시</div>
                        <div className="time">오전 10시</div>
                        <div className="time">오전 11시</div>
                        <div className="time">오후 12시</div>
                        <div className="time">오후 1시</div>
                        <div className="time">오후 2시</div>
                        <div className="time">오후 3시</div>
                        <div className="time">오후 4시</div>
                        <div className="time">오후 5시</div>
                        <div className="time">오후 6시</div>
                        <div className="time">오후 7시</div>
                        <div className="time">오후 8시</div>
                        <div className="time">오후 9시</div>
                        <div className="time">오후 10시</div>
                        <div className="time">오후 11시</div>
                      </div>
                    </th>
                    <td>
                      <div className="cols" style={{ width: "90px" }}>
                        <div
                          className="subject color5"
                          style={{ height: "151px", top: "450px" }}
                        >
                          <ul className="status">
                            <li title="삭제" className="del"></li>
                          </ul>
                          <h3>한국사 입문</h3>
                          <p>
                            <em>전세영</em>
                            <span>운캠B 423</span>
                          </p>
                        </div>
                        <div
                          className="subject color3"
                          style={{ height: "151px", top: "750px" }}
                        >
                          <ul className="status">
                            <li title="삭제" class="del"></li>
                          </ul>
                          <h3>컴퓨터그래픽스</h3>
                          <p>
                            <em>황주선</em>
                            <span>난206</span>
                          </p>
                        </div>
                      </div>
                      <div className="grids">
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                      </div>
                    </td>
                    <td>
                      <div className="cols" style={{ width: "90px" }}></div>
                      <div className="grids">
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                      </div>
                    </td>
                    <td>
                      <div className="cols" style={{ width: "90px" }}>
                        <div
                          className="subject color4"
                          style={{ height: "151px", top: "450px" }}
                        >
                          <ul className="status">
                            <li title="삭제" className="del"></li>
                          </ul>
                          <h3>음식과 문화 이야기</h3>
                          <p>
                            <em>고성희</em>
                            <span></span>
                          </p>
                        </div>
                        <div
                          className="subject color1"
                          style={{ height: "151px", top: "750px" }}
                        >
                          <ul className="status">
                            <li title="삭제" className="del"></li>
                          </ul>
                          <h3>데이터베이스</h3>
                          <p>
                            <em>김규영</em>
                            <span></span>
                          </p>
                        </div>
                      </div>
                      <div className="grids">
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                      </div>
                    </td>
                    <td>
                      <div className="cols" style={{ width: "90px" }}>
                        <div
                          className="subject color6"
                          style={{ height: "151px", top: "750px" }}
                        >
                          <ul className="status">
                            <li title="삭제" className="del"></li>
                          </ul>
                          <h3>미적분과 벡터해석 기초</h3>
                          <p>
                            <em>안소영</em>
                            <span>성212</span>
                          </p>
                        </div>
                        <div
                          className="subject color2"
                          style={{ height: "151px", top: "600px" }}
                        >
                          <ul className="status">
                            <li title="삭제" className="del"></li>
                          </ul>
                          <h3>모바일프로그래밍</h3>
                          <p>
                            <em>조성우</em>
                            <span>난702</span>
                          </p>
                        </div>
                      </div>
                      <div className="grids">
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                      </div>
                    </td>
                    <td>
                      <div className="cols" style={{ width: "90px" }}></div>
                      <div className="grids">
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                      </div>
                    </td>
                    <td style={{ display: "none" }}>
                      <div className="cols"></div>
                      <div className="grids">
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                      </div>
                    </td>
                    <td style={{ display: "none" }}>
                      <div className="cols"></div>
                      <div className="grids">
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                        <div className="grid"></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Friends_detail;
