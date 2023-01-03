import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Login from "./routes/Login.js";
import Account from "./routes/Account.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Navbar bg="white" variant="white">
        <Container>
          <Nav className="me-auto" id="main-bar">
            <Nav.Link className="main_logo" onClick={() => { }}>
              <img
                src={process.env.PUBLIC_URL + "main_logo.png"}
                width="60%"
              ></img>
            </Nav.Link>
            <span className="main_msg">
              <div className="everytime">에브리타임</div>
              <div className="main_school">동의대</div>
            </span>

            <Nav.Link className="link" onClick={() => { }}>
              게시판
            </Nav.Link>
            <Nav.Link className="link" href="#pricing">
              강의실
            </Nav.Link>
            <Nav.Link className="link" onClick={() => { }}>
              학점계산기
            </Nav.Link>
            <Nav.Link className="link" onClick={() => { }}>
              친구
            </Nav.Link>
            <Nav.Link className="link" onClick={() => { }}>
              책방
            </Nav.Link>
            <Nav.Link className="link" onClick={() => { }}>
              캠퍼스픽
            </Nav.Link>
            <Nav.Link onClick={() => { }}>
              {" "}
              <img
                src={process.env.PUBLIC_URL + "message.png"}
                width="60%"
              ></img>
            </Nav.Link>
            <Nav.Link onClick={() => { }}>
              {" "}
              <img
                src={process.env.PUBLIC_URL + "friends.png"}
                width="60%"
              ></img>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;