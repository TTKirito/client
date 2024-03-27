export interface User {
  avatar?: string;
  firstname?: string;
  lastname?: string;
  position?: string;
}

export enum Gender {
  MAN = "Man",
  WOMEN = "Women",
}

export interface Participant {
  firstName: string;
  lastName: string;
  status: string;
  avatar: string;
  gender: Gender;
  dob: string;
}

export interface Location {
  lat: number;
  long: number;
  blockNo?: number;
  apartmentNumber?: number;
  apartmentName?: string;
  street?: string;
  city?: string;
  country?: string;
}

export enum EventType {
  EVENT = "Event",
  MEETING = "Meeting",
}

export enum VisitType {
  OFFICE_VISIT = "Office visit",
  ONLINE = "Online",
}

export interface Event {
  id?: number;
  title: string;
  startTime: string;
  endTime: string;
  participants: Participant[];
  owner: Participant;
  isEmegency?: boolean;
  location: Location;
  note: string;
  type: EventType;
  visitType: VisitType;
  meeting: string;
}
