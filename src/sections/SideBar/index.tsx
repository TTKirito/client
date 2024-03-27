import react from "react";
import { Link } from "react-router-dom";
import { Avartar, MenuItems } from "./components";
import "./styles/index.css";
import logo from "./assets/alarm.svg";
import { User } from "../../lib/types";

interface Props {
  user: User;
}


export const SideBar = ({ user }: Props) => {
  console.log(window.innerWidth, "hiiiiiiiiiiiiiiiiiiiiii");
  return (
    <div className="side-bar">
      <div className="side-bar__logo-section">
        <Link to="/" className="side-bar__logo">
          <img src={logo} alt="App logo" />
          <p>modento</p>
        </Link>
      </div>
      <MenuItems />
      <Avartar {...user} />
    </div>
  );
};
