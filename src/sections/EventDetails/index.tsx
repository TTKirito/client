import react from "react";
import "./styles/index.css";
import userImg from "./assets/user.jpg";
import { DateTime, Details, Map, Note, Participant } from "./components";
import { Event, EventType, Gender, VisitType } from "../../lib/types";

const eventNow: Event = {
  title: "Meet with Thuan",
  startTime: "2024-03-20T06:00:00.000Z",
  endTime: "2024-03-20T09:00:00.000Z",
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
    street: "08 Nguyen Cao Luyen",
    city: "Da nang",
    country: "Viet Nam",
    // apartmentName: "DISCO",
    // apartmentNumber: 5,
    // blockNo: 5
  },
  note: `I feel like i have toothache every time i drink or eat someting hot.
  It all started about a wweek a go, the pain is not severe, but it
  bothers me.`,
  visitType: VisitType.OFFICE_VISIT,
  type: EventType.MEETING,
  meeting: "http://",
};

interface Props {
  event?: Event;
}

export const EventDetails = ({ event }: Props) => {
  return (
    <>
      <div
        key={'event-details'}
        className="event-details"
        style={{ display: eventNow ? "" : "none" }}
      >
        <div className="event-details__info" key={event?.id}>
          <Details event={event ? event : eventNow} />
          <DateTime event={event ? event : eventNow} />
          <Note event={event ? event : eventNow} />
          <Participant event={event ? event : eventNow} />
          <Map event={event ? event : eventNow} />
          <div className="event-details__info-meeting--link">
            Go to meet link
          </div>
          <div className="event-details__info-bottom">
            <div className="event-details__info-reschedule">Reschedule</div>
            <div className="event-details__info-decline">Decline</div>
          </div>
        </div>
      </div>
    </>
  );
};
