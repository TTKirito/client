import react from "react";
import { Event } from "../../../../lib/types";
import avartarImg from "./assets/user.jpg";
import "./styles/index.css";

interface Props {
  event: Event;
}

export const Participant = ({ event }: Props) => {

  let screen = window.innerWidth

  let defaultParticipants = 3

  let participantElement = event.participants.map((res, i) => {

    if (i > defaultParticipants + 1) {
      return null;
    }

    if (i > defaultParticipants) {
      return (
        <div className="event-details__info-participant--details">
          <div className="event-details__info-participant">
            <div className="event-details__info-participant--plus">{event.participants.length - 4}</div>
          </div>
        </div>
      );
    }

    return (
      <div className="event-details__info-participant--details">
        <div className="event-details__info-participant">
          <img
            className="event-details__info-participant--img"
            src={res.avatar}
          />
          <div className="event-details__info-participant--name">
            {res.lastName}
          </div>
        </div>
      </div>
    );
  });

  participantElement = participantElement.filter((res) => res !== null);
  return (
    <>
      <div className="event-details__info-heading">Participant</div>

      <div className="event-details__info-participant--section">
        {participantElement}
      </div>
    </>
  );
};
