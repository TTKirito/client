import react, { useEffect, useState } from "react";
import { Event } from "../../../../lib/types";
import {
  getCurrentCheckPoint,
  getEventInHours,
  getFomatTime,
  getHeightEventCalendarHourDashBoard,
  getTopEventCalendarHourDashboard,
  getTopTimeEventCalendarHourDashboard,
} from "../../../../lib/utils";
import { EventHour } from "../EventHour";
import { LineCurrent } from "../LineCurrent";
import "./styles/index.css";

interface Props {
  date: Date;
  event: Event[];
  isLastChild: boolean;
  index: number;
  topCurrentLine: number;
  refresh: boolean;
  setRefresh: (bol: boolean) => void;
  lastHours: Date;
  setEvent: (event?: Event) => void;
}

export const Events = ({
  date,
  event,
  isLastChild,
  index,
  topCurrentLine,
  refresh,
  setRefresh,
  lastHours,
  setEvent
}: Props) => {
  if (index !== 0) {
    // if first get date
    date.setMinutes(date.getMinutes() + 30);
  }

  // get event in hours
  const e = event.find((res) => {
    const isEvent = getEventInHours({
      eventDate: new Date(res.startTime),
      day: date,
      eventEndDate: new Date(res.endTime),
    });

    if (isEvent) return res;
    return null;
  });

  // if event > lastHours crop endTime = lastHours
  if (
    e &&
    new Date(e?.endTime || "").getTime() > new Date(lastHours).getTime() + 30
  ) {
    lastHours.setMinutes(lastHours.getMinutes() + 30);
    e.endTime = lastHours.toISOString();
  }

  // Get Top Event
  let topTimeEvent = getTopTimeEventCalendarHourDashboard({
    startTime: e?.startTime || "",
    screen: window.innerWidth,
  });

  // GetHeightEvent
  let height = getHeightEventCalendarHourDashBoard({
    startTime: (e && e.startTime) || "",
    endTime: (e && e.endTime) || "",
    screen: window.innerWidth,
  });

  //Get Margin form Event - change time to change margin
  let topEventHour = getTopEventCalendarHourDashboard({
    startTime: e?.startTime || "",
    endTime: e?.endTime || "",
    screen: window.innerWidth,
  });

  // If last child and > new Date + 30 refresh and set new  current date hour - not set if not is day

  if (
    isLastChild &&
    new Date().getTime() > new Date(date).getTime() + 60000 * 30
  ) {
    if (refresh === true) {
      setRefresh(false);
    } else {
      setRefresh(true);
    }
  }

  return (
    <div className="dashboard-events__time-linehour">
      <div className="dashboard-events__time-hour">{getFomatTime(date)}</div>
      <div
        className={
          date.getMinutes() === 0
            ? `dashboard-line`
            : `dashboard-line dashboard-line__dashed`
        }
      ></div>
      {getCurrentCheckPoint({ toDate: new Date(), fromDate: date }) && (
        <LineCurrent topCurrentLine={topCurrentLine} />
      )}

      {getCurrentCheckPoint({
        toDate: new Date(e?.startTime || ""),
        fromDate: date,
      }) && (
        <EventHour
          topCurrentLine={topTimeEvent || 0}
          height={height}
          event={e}
          topEventHours={topEventHour}
          setEvent={setEvent}
        />
      )}
    </div>
  );
};
