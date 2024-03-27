import react from "react";
import './styles/index.css'

interface Props {
  topCurrentLine: number;
}
export const LineCurrent = ({ topCurrentLine }: Props) => {
  return (
    <div
      className="dashboard-line__current"
      style={{ top: `${topCurrentLine}%` }}
      key={topCurrentLine}
    ></div>
  );
};
