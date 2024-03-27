import { User } from "./types";

export const getMonthName = (num: number): string => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthNames[num];
};

export const getDayName = (day: number): string => {
  const dayNames = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

  return dayNames[day];
};

export const getFomatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US");
};

export const getFomatTime = (date: Date): string => {
  return date
    .toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
    .replace(/AM|PM/, "");
};

export const formatDate = (date: Date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const getCurrentCheckPoint = ({
  toDate,
  fromDate,
}: {
  toDate: Date;
  fromDate: Date;
}) => {
  const toDateTime = formatDate(toDate);
  const fromDateTime = formatDate(fromDate);
  if (toDateTime !== fromDateTime) {
    return false;
  }

  const toHours = toDate.getHours();
  const fromHours = fromDate.getHours();

  if (toHours !== fromHours) {
    return false;
  }
  const toMinutes = toDate.getMinutes();
  const fromMinute = fromDate.getMinutes();

  if (fromMinute === 0 && toMinutes > 30) {
    return false;
  }

  if (fromMinute === 0 && toMinutes === 30) {
    return false;
  }

  if (fromMinute === 30 && toMinutes > fromMinute + 30) {
    return false;
  }

  if (fromMinute === 30 && toMinutes < 30) {
    return false;
  }

  return true;
};

export const getEventInHours = ({
  eventDate,
  day,
  eventEndDate,
}: {
  eventDate: Date;
  day: Date;
  eventEndDate: Date;
}) => {
  const eventDateTime = formatDate(eventDate);
  const dayDateTime = formatDate(day);

  const eventHours = eventDate.getHours();
  const dayHours = day.getHours();

  const eventMinutes = eventDate.getMinutes();
  const dayMinute = day.getMinutes();

  if (eventDateTime !== dayDateTime) {
    return false;
  }

  if (eventHours !== dayHours) {
    return false;
  }

  if (eventMinutes < dayMinute) {
    return false;
  }
  if (eventMinutes > dayMinute + 30) {
    return false;
  }

  return true;
};

export const getHeightEventCalendarHourDashBoard = ({
  startTime,
  endTime,
  screen,
}: {
  startTime: string;
  endTime: string;
  screen: number;
}) => {
  return (
    Math.round(
      ((new Date(endTime).getTime() - new Date(startTime).getTime()) / 60000) *
        2
    ) * 1.15
  );
};

export const getLineEventCalendarHourDashBoard = (): number => {
  let minutes = new Date().getMinutes();

  if (minutes >= 30) {
    minutes = minutes - 30;
  }

  return 50 + minutes * 3.3;
};

export const getTopEventCalendarHourDashboard = ({
  startTime,
  endTime,
  screen,
}: {
  startTime: string;
  endTime: string;
  screen: number;
}): number => {
  let beetween = Math.abs(
    (new Date(endTime).getTime() - new Date(startTime).getTime()) / 60000
  );
  beetween = beetween * 1.6;

  if (beetween <= 40) {
    return beetween * 0.2;
  }

  if (beetween <= 70) {
    return beetween * 0.25;
  }

  if (beetween <= 100) {
    return beetween * 0.6;
  }

  if (beetween <= 130) {
    return beetween * 0.7;
  }

  if (beetween <= 160) {
    return beetween * 0.72;
  }

  if (beetween <= 190) {
    return beetween * 0.9;
  }

  if (beetween <= 220) {
    return beetween * 0.72;
  }

  if (beetween <= 250) {
    return beetween * 0.75;
  }

  if (beetween <= 280) {
    return beetween * 0.77;
  }

  return beetween * 0.76;
};

export const getTopTimeEventCalendarHourDashboard = ({
  startTime,
  screen,
}: {
  startTime: string;
  screen: number;
}): number => {
  return 50 + new Date(startTime).getMinutes() * 3;
};

export const getTextHeading = ({
  curHr,
  user,
}: {
  curHr: number;
  user: User;
}): string => {
  let text;
  if (curHr < 12) {
    text = `Good morning, ${user.firstname}`;
  } else if (curHr < 18) {
    text = `Good afternoon, ${user.firstname}`;
  } else {
    text = `Good evening, ${user.firstname}`;
  }

  return text;
};
