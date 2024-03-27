import react from "react";
import bellImg from "./assets/bell-fill.svg";
import './styles/index.css'

export const Notification = () => {
  return (
    <div className="notification">
      <img className="notification-icon" src={bellImg} />
    </div>
  );
};
