import React from "react";
import { Button } from "antd";

import "./CalendarHeader.scss";

interface CalendarHeaderProps {
  currentMonth?: string;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentMonth = "July 2025",
  onPrevMonth = () => {},
  onNextMonth = () => {},
}) => {
  return (
    <div className="calendar-header">
      <Button
        className="nav-button"
        onClick={onPrevMonth}
        icon={
          <img
            src="svg/arrow-left.svg"
            alt="Previous month"
            width={24}
            height={24}
          />
        }
      />
      <span className="month-text">{currentMonth}</span>
      <Button
        className="nav-button"
        onClick={onNextMonth}
        icon={
          <img
            src="svg/arrow-right.svg"
            alt="Next month"
            width={24}
            height={24}
          />
        }
      />
    </div>
  );
};

export default CalendarHeader;
