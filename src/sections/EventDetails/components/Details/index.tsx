import react from "react";
import { Event } from "../../../../lib/types";
import threeDot from "./assets/dots-three-vertical.svg";
import avartarImg from "./assets/user.jpg";
import './styles/index.css'

interface Props {
  event: Event
}

export const Details = ({ event }: Props) => {
  return (
    <>
      <div className="event-heading">
        <div className="event-heading__title">Details</div>
        <img className="event-heading__icon" src={threeDot} />
      </div>
      <div className="event-details__host">
        <img className="event-details__host-avatar" src={event.owner.avatar} />
        <div className="event-details__host-info">
          <div className="event-details__host-info--name">{event.owner.firstName} {event.owner.lastName}</div>
          <div className="event-details__host-info--gender__age">
            {event.owner.gender}, {new Date().getFullYear() - new Date(event.owner.dob).getFullYear()} years
          </div>
        </div>
      </div>
    </>
  );
};
