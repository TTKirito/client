import react from "react";
import "./styles/index.css";

interface Props {
  avatar?: string;
  firstname?: string;
  lastname?: string;
  position?: string;
}

export const Avartar = ({ avatar, firstname, position, lastname }: Props) => {
  return (
    <div className="dashboard-avatar">
      <img src={avatar} className="dashboard-avatar__image" />
      <p className="dashboard-avatar__name">
        {firstname} {lastname}
      </p>
      <p className="dashboard-avatar__position">{position}</p>
    </div>
  );
};
