import react from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import locationIcon from "./assets/map-pin-fill.svg";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Event } from "../../../../lib/types";
import locationThinIcon from "./assets/map-pin.svg";
import "./styles/index.css";

interface Props {
  event: Event;
}

export const Map = ({ event }: Props) => {
  const myIcon = new L.Icon({
    iconUrl: locationIcon,
    iconRetinaUrl: locationIcon,
    popupAnchor: [-0, -0],
    iconSize: [35, 40],
  });

  let height = 16;
  const screen = window.innerWidth;

  return (
    <>
      <div className="event-details__info-heading">Location</div>
      <div className="event-details__info-location--section">
        <div className="event-details__info-location--icon">
          <img
            className="event-details__info-location--img"
            src={locationThinIcon}
          />
        </div>
        <div className="event-details__info-location--info">
          <div className="event-details__info-location--street">
            {event.location.blockNo}
            {event.location.blockNo && " "}
            {event.location.apartmentNumber}
            {event.location.apartmentNumber && " "}
            {event.location.apartmentName}
            {event.location.apartmentName && " "}
            {event.location.blockNo ||
            event.location.apartmentNumber ||
            event.location.apartmentName
              ? ", "
              : ""}
            {event.location.street}
          </div>
          <div className="event-details__info-location--country">
            {event.location.city}, {event.location.country}
          </div>
        </div>
      </div>
      <MapContainer
        center={[event.location.lat, event.location.long]}
        zoom={15}
        style={{
          height: `${height}rem`,
          borderRadius: "10px",
          border: "1px solid #DEE5F1",
        }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[event.location.lat, event.location.long]}
          icon={myIcon}
        ></Marker>
      </MapContainer>
    </>
  );
};
