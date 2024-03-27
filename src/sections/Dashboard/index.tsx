import react, { useEffect, useState } from "react";
import { Event, EventType, Gender, User, VisitType } from "../../lib/types";
import {
  getLineEventCalendarHourDashBoard,
  getMonthName,
  getTextHeading,
} from "../../lib/utils";
import { Datetime, Events } from "./components";
import "./styles/index.css";
import { useNavigate } from "react-router-dom";
import userImg from "./assets/9.jpg";
import { EventDetails } from "../EventDetails";

interface Props {
  user: User;
}

let dataEvents: Event[] = [
  {
    id: 1,
    title: "Meet with Thuan",
    startTime: "2024-03-21T23:00:00.000Z",
    endTime: "2024-03-21T23:30:00.000Z",
    owner: {
      lastName: "Doe",
      firstName: "Jane",
      avatar: userImg,
      status: "pending",
      gender: Gender.MAN,
      dob: "1998-03-20T09:22:36.906Z",
    },
    participants: [
      {
        lastName: "Doe",
        firstName: "Jane",
        avatar: userImg,
        status: "pending",
        gender: Gender.MAN,
        dob: "1998-03-20T09:22:36.906Z",
      },
      {
        lastName: "Doe",
        firstName: "Jane",
        avatar: userImg,
        status: "pending",
        gender: Gender.MAN,
        dob: "1998-03-20T09:22:36.906Z",
      },
      {
        lastName: "Doe",
        firstName: "Jane",
        avatar: userImg,
        status: "pending",
        gender: Gender.MAN,
        dob: "1998-03-20T09:22:36.906Z",
      },
      {
        lastName: "Doe",
        firstName: "Jane",
        avatar: userImg,
        status: "pending",
        gender: Gender.MAN,
        dob: "1998-03-20T09:22:36.906Z",
      },
    ],
    location: {
      lat: 16.069559683120797,
      long: 108.2460254990134,
    },
    note: "",
    visitType: VisitType.OFFICE_VISIT,
    type: EventType.MEETING,
    meeting: "http://",
  },
  {
    id: 2,
    title: "Meet with Thuan",
    startTime: "2024-03-21T12:15:00.000Z",
    endTime: "2024-03-21T15:45:19.375Z",
    owner: {
      lastName: "Doe",
      firstName: "Jane",
      avatar: userImg,
      status: "pending",
      gender: Gender.MAN,
      dob: "1998-03-20T09:22:36.906Z",
    },
    participants: [
      {
        lastName: "Doe",
        firstName: "Jane",
        avatar: userImg,
        status: "pending",
        gender: Gender.MAN,
        dob: "1998-03-20T09:22:36.906Z",
      },
    ],
    location: {
      lat: 16.069559683120797,
      long: 108.2460254990134,
    },
    note: "",
    visitType: VisitType.OFFICE_VISIT,
    type: EventType.MEETING,
    meeting: "http://",
  },
  {
    id: 3,
    title: "Meet with Thuan",
    startTime: "2024-03-21T05:00:00.000Z",
    endTime: "2024-03-21T06:00:00.000Z",
    owner: {
      lastName: "Doe",
      firstName: "Jane",
      avatar: userImg,
      status: "pending",
      gender: Gender.MAN,
      dob: "1998-03-20T09:22:36.906Z",
    },
    participants: [
      {
        lastName: "Doe",
        firstName: "Jane",
        avatar: userImg,
        status: "pending",
        gender: Gender.MAN,
        dob: "1998-03-20T09:22:36.906Z",
      },
    ],
    location: {
      lat: 16.069559683120797,
      long: 108.2460254990134,
    },
    note: "",
    visitType: VisitType.OFFICE_VISIT,
    type: EventType.MEETING,
    meeting: "http://",
  },
  {
    id: 4,
    title: "Meet with Thuan",
    startTime: "2024-03-21T06:00:00.000Z",
    endTime: "2024-03-21T08:00:00.000Z",
    isEmegency: true,
    owner: {
      lastName: "Doe",
      firstName: "Jane",
      avatar: userImg,
      status: "pending",
      gender: Gender.MAN,
      dob: "1998-03-20T09:22:36.906Z",
    },
    participants: [
      {
        lastName: "Doe",
        firstName: "Jane",
        avatar: userImg,
        status: "pending",
        gender: Gender.MAN,
        dob: "1998-03-20T09:22:36.906Z",
      },
    ],
    location: {
      lat: 16.069559683120797,
      long: 108.2460254990134,
    },
    note: "",
    visitType: VisitType.OFFICE_VISIT,
    type: EventType.MEETING,
    meeting: "http://",
  },
];

export const DashBoard = ({ user }: Props) => {
  const navigate = useNavigate();
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [refresh, setRefresh] = useState(false);
  const [event, setEvent] = useState<Event>()
  const curHr = today.getHours();

  // Get text heading
  let text = getTextHeading({ curHr, user });

  useEffect(() => {
    if (currentDate.getDate() === new Date().getDate()) {
      setCurrentDate(new Date());
      console.log("ok");
    }
  }, [refresh]);


  setInterval(() => {
    console.log("interval");
    if (refresh === true) {
      setRefresh(false);
    } else {
      setRefresh(true);
    }
  }, 60000);

  // For text heading
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const date = currentDate.getDate();

  //11 Get date number
  let defaultDate = 11
  let screen = window.innerWidth

  const arrayDate = Array.from({ length: defaultDate }).map((res, i) => {
    if (i === 0) return today;
    let newD = new Date(today);
    newD.setDate(today.getDate() + i);
    return newD;
  });

  // List date number
  const dateTimeSectionElement = (
    <div className="dashboard-datetime__date-section">
      {arrayDate.map((date, i) => {
        return (
          <Datetime
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
            date={date}
            isLastChild={i === arrayDate.length - 1}
            nextLastChild={i === arrayDate.length - 2}
          />
        );
      })}
      <div className="dashboard-datetime__info-blur"></div>
    </div>
  );

  // Not update current date
  let cloneCurrentDate = new Date(currentDate);
  let hours = cloneCurrentDate.getHours();

  // For get hour previors and not 24h
  if (24 - hours < 5) {
    let data = [];
    let i = hours;
    while (data.length !== 5 - (24 - hours)) {
      data.push(i);
      i = i - 1;
    }

    cloneCurrentDate.setHours(i);
    cloneCurrentDate.setMinutes(0);
  } else {
    cloneCurrentDate.setMinutes(0);
  }

  // Not update current date
  const cloneCloneCurrentDate = new Date(cloneCurrentDate);
  const firstHour = new Date(cloneCloneCurrentDate);

  // Get all time to 5 hour and 5 30 minutes
  let getLastHours = Array.from({ length: 10 }).map((rs, i) => {
    if (i !== 0) {
      cloneCloneCurrentDate.setMinutes(cloneCloneCurrentDate.getMinutes() + 30);
    }
    return cloneCloneCurrentDate;
  });

  // Set start time if event startTime < firstHour and endTime > firstHour - for next dashboar time when hour is update
  dataEvents = dataEvents.map((event) => {
    if (
      new Date(event.startTime) < new Date(firstHour) &&
      new Date(event.endTime) > new Date(firstHour)
    ) {
      event.startTime = firstHour.toISOString();
    }

    return event;
  });

  // return Event in dashbaord hour
  const listEventHoursElement = Array.from({ length: 10 }).map((rs, i) => {
    return (
      <Events
        date={cloneCurrentDate}
        event={dataEvents}
        isLastChild={i === 9}
        index={i}
        topCurrentLine={getLineEventCalendarHourDashBoard()}
        refresh={refresh}
        setRefresh={setRefresh}
        lastHours={getLastHours[getLastHours.length - 1]}
        setEvent={setEvent}
      />
    );
  });

  return (
    <>
      <div className="dashboard-section">
        <h1 className="dashboard-heading">{text}</h1>
        <div className="dashboard-datetime">
          <h3 className="dashboard-datetime__title">
            {getMonthName(month)} {month + 1}, {year}, {date}
          </h3>
          {dateTimeSectionElement}
          <div className="dashboard-events__section">
            <div className="dashboard-events__heading">
              <div className="dashboard-events__title">Upcoming events</div>
              <div className="dashboard-events__view">View all</div>
            </div>
            {listEventHoursElement}
            <div className="dashboard-events__last-opacity"></div>
          </div>
        </div>
      </div>
      <EventDetails event={event} />
    </>
  );
};
