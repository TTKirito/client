import react from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import meetingImg from "../../assets/video-camera-fill.svg";
import dashboardImg from "../../assets/squares-four-fill.svg";
import peopleImg from "../../assets/user-fill.svg";
import calendarImg from "../../assets/calendar-blank-fill.svg";
import invoiceImg from "../../assets/folder-simple-fill.svg";
import "./styles/index.css";

import meetingInactiveImg from "../../assets/video-camera.svg";
import dashboardInactiveImg from "../../assets/squares-four.svg";
import peopleInactiveImg from "../../assets/user.svg";
import calendarInactiveImg from "../../assets/calendar-blank.svg";
import invoiceInactiveImg from "../../assets/folder-simple.svg";

export const MenuItems = () => {
  const location = useLocation();

  const isLocation = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <div className="menu">
      <Link className={isLocation("/") ? "item item-active " : "item"} to="/">
        <img
          src={isLocation("/") ? dashboardImg : dashboardInactiveImg}
          className="item-icon"
        />
        <div>Dashboard</div>
      </Link>
      <Link
        className={isLocation("/events") ? "item item-active " : "item"}
        to="/events"
      >
        <img
          src={isLocation("/events") ? meetingImg : meetingInactiveImg}
          className="item-icon"
        />
        <div>Events</div>
      </Link>
      <Link
        className={isLocation("/people") ? "item item-active " : "item"}
        to="/people"
      >
        {" "}
        <img
          src={isLocation("/people") ? peopleImg : peopleInactiveImg}
          className="item-icon"
        />
        <div>People</div>
      </Link>
      <Link
        className={isLocation("/calendar") ? "item item-active " : "item"}
        to="/calendar"
      >
        {" "}
        <img
          src={isLocation("/calendar") ? calendarImg : calendarInactiveImg}
          className="item-icon"
        />
        <div>Calendar</div>
      </Link>
      <Link
        className={isLocation("/invoices") ? "item item-active " : "item"}
        to="/invoices"
      >
        {" "}
        <img
          src={isLocation("/invoices") ? invoiceImg : invoiceInactiveImg}
          className="item-icon"
        />
        <div>Invoices</div>
      </Link>
    </div>
  );
};
