import react from "react";
import "./styles/index.css";
import tagIcon from "./assets/tag-fill.svg";
import tagIconGray from "./assets/tag-fill-gray.svg";
import threeDot from "./assets/dots-three-vertical.svg";
import user from "./assets/11.jpg";
import { Event } from "../../../../lib/types";
import { getFomatTime } from "../../../../lib/utils";

interface Props {
  topCurrentLine: number;
  height: number;
  event: Event | undefined;
  topEventHours: number;
  setEvent: (event?: Event) => void;
}

export const EventHour = ({
  topCurrentLine,
  height,
  event,
  topEventHours,
  setEvent
}: Props) => {
  const isEventPast =
    new Date(event?.endTime || "").getTime() < new Date().getTime();

  const styleDashboardEventCurrent: {
    top: string;
    height: number;
    backgroundColor?: string;
    opacity?: string;
  } = {
    top: `${topCurrentLine}%`,
    height,
  };
  const styleDashBoardEventCurrentSectionLeftIcon: {
    backgroundColor?: string;
  } = {};
  const styleOpacity: { opacity?: number } = {};

  if (isEventPast) {
    styleDashboardEventCurrent["backgroundColor"] = "#F1F3F4";
    styleDashboardEventCurrent["opacity"] = "0.8";
    styleDashBoardEventCurrentSectionLeftIcon["backgroundColor"] = "#ffff";
    styleOpacity["opacity"] = 0.6;
  }

  const isInEvent =
    new Date(event?.endTime || "").getTime() > new Date().getTime() &&
    new Date(event?.startTime || "").getTime() < new Date().getTime();
  if (isInEvent) {
    styleDashboardEventCurrent["backgroundColor"] = "#E9F5FB";
    styleDashBoardEventCurrentSectionLeftIcon["backgroundColor"] = "#27A860";
  }

  if (event?.isEmegency) {
    styleDashboardEventCurrent["backgroundColor"] = "#FEF4F1";
    styleDashBoardEventCurrentSectionLeftIcon["backgroundColor"] = "#F6987A";
  }

  const handerSetEvent = (event?: Event): void => {
    setEvent(event)
  }

  return (
    <div
      className="dashboard-event__current"
      style={styleDashboardEventCurrent}
      key={topCurrentLine}
      onClick={() => handerSetEvent(event)}
    >
      <div
        className="dashboard-event__current-section"
        style={{ marginTop: topEventHours }}
      >
        <div className="dashboard-event__current-section--left">
          <div
            className="dashboard-event__current-section--left__icon"
            style={styleDashBoardEventCurrentSectionLeftIcon}
          >
            <img
              className="dashboard-event__current-section--left__logo"
              src={isEventPast ? tagIconGray : tagIcon}
            />
          </div>
          <div
            className="dashboard-event__current-section--left__info"
            style={styleOpacity}
          >
            <div className="dashboard-event__current-section--left__title">
              {event && event.title}
            </div>
            <div className="dashboard-event__current-section--left__datetime">
              <div className="dashboard-event__current-section--left__datetime-name">
                {event?.owner.firstName} {event?.owner.lastName}
              </div>
              <div className="dashboard-event__current-section--left__datetime-start">
                {getFomatTime(new Date(event?.startTime || ""))}
              </div>
              <div className="dashboard-event__current-section--left__datetime-end">
                {getFomatTime(new Date(event?.endTime || ""))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="dashboard-event__current-section--right"
          style={styleOpacity}
        >
          <img
            className="dashboard-event__current-section--right__img"
            src={event?.owner.avatar}
          />
          <img
            className="dashboard-event__current-section--right__icon"
            src={threeDot}
          />
        </div>
      </div>
    </div>
  );
};
