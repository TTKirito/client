import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import { DashBoard, EventDetails, Login, SideBar } from "./sections";
import avartarImg from "./assets/user.jpg";
import { Notification } from "./components/Notification";
import { GetUserResponse, User } from "./sections/Login/types";
import { useGet } from "./lib/api/useGet";
import { ApiCall } from "./lib/api";

const App = () => {
  const username = localStorage.getItem("username")
  const { data, error } = useGet<GetUserResponse, string>(String(username), ApiCall.GetUser)

  if (error) {
    localStorage.removeItem("access_token")
    localStorage.removeItem("username")
  }

  const user = {
    avatar: avartarImg,
    firstname: data?.user.full_name,
    lastname: "",
    position: "data?.position",
  };

  if (data) {
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
  } 

  return (
    <Router>
      <div id = "layout">
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
 

 
};

render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
