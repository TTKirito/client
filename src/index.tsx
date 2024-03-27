import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import { DashBoard, EventDetails, SideBar } from "./sections";
import avartarImg from "./assets/user.jpg";
import { Notification } from "./components/Notification";
import { Account } from "./types/types";

const App = () => {
  const user = {
    avatar: avartarImg,
    firstname: "data?.owner",
    lastname: "",
    position: "data?.position",
  };
  return (
    <Router>
      <div id="layout">
        <SideBar user={user} />
        <Routes>
          <Route path="/" element={<DashBoard user={user} />} />
          <Route path="/events" element={<div></div>} />
          <Route path="/people" element={<div></div>} />
          <Route path="/calendar" element={<div></div>} />
          <Route path="/invoices" element={<div></div>} />
        </Routes>
        <Notification />
      </div>
    </Router>
  );
};

render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
