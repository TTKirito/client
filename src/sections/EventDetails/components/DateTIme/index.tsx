import react from "react";
import { Event } from "../../../../lib/types";
import { getFomatTime, getMonthName } from "../../../../lib/utils";
import clock from "./assets/clock-fill.svg";
import tagGreen from "./assets/tag-fill-green.svg";
import './styles/index.css'

interface Props {
  event: Event
}

export const DateTime = ({ event }: Props) => {
  return (
    <>
      <div className="event-details__info-heading">Event info</div>

      <div className="event-details__info-time">
        <div className="event-details__info-time--clock">
          <img className="event-details__info-time--clock__icon" src={clock} />
        </div>
        <div className="event-details__info-time--title ">{getFomatTime(new Date(event.startTime))}</div>
        <div className="event-details__info-time--title__icon"></div>
        <div className="event-details__info-time--title">{getFomatTime(new Date(event.endTime))}</div>
        <div className="event-details__info-time--title__icon-dot"></div>
        <div className="event-details__info-time--title">{getMonthName(new Date(event.startTime).getMonth())} {new Date(event.startTime).getDate()}, {new Date(event.startTime).getFullYear()}</div>
      </div>

      <div className="event-details__info-time">
        <div className="event-details__info-time--clock">
          <img
            className="event-details__info-time--clock__icon"
            src={tagGreen}
          />
        </div>
        <div className="event-details__info-time--title">{event.type}</div>
        <div className="event-details__info-time--title__icon-dot"></div>
        <div className="event-details__info-time--title">{event.visitType}</div>
      </div>
    </>
  );
};
