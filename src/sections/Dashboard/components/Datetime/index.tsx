import react from "react";
import { getDayName, getFomatDate } from "../../../../lib/utils";
import './styles/index.css'

interface Props {
  currentDate: Date;
  date: Date;
  setCurrentDate: (date: Date) => void;
  isLastChild: boolean;
  nextLastChild: boolean;
}

export const Datetime = ({
  currentDate,
  date,
  setCurrentDate,
  isLastChild,
  nextLastChild,
}: Props) => {
  const changeCurrentDateHandle = (date: Date) => {
    setCurrentDate(date);
  };

  let classDateTimeInfo = `dashboard-datetime__info`;
  let classDateNumber = `dashboard-datetime__date-datenum`;

  if (getFomatDate(currentDate) === getFomatDate(date)) {
    classDateTimeInfo += ` dashboard-datetime__info-active`;
    classDateNumber += ` dashboard-datetime__date-datenum-active`;
  }

  if (isLastChild) {
    classDateTimeInfo += ` dashboard-datetime__info-opacity`
  }

  return (
    <>
    <div
        className={classDateTimeInfo}
        onClick={() => changeCurrentDateHandle(date)}
      >
        <p className="dashboard-datetime__date-datename">
          {getDayName(date.getDay())}
        </p>
        <p className={classDateNumber}>{date.getDate()}</p>
      </div>
    </>
      
  );
};
