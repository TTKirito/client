import react from "react";
import { Event } from "../../../../lib/types";
import './styles/index.css'

interface Props {
  event: Event
}
export const Note = ({ event }: Props) => {
  return (
    <>
      <div className="event-details__info-heading">Event notes</div>

      <div className="event-details__info-note">
        <div className="event-details__info-note--description">
          {event.note}
        </div>
      </div>
    </>
  );
};
