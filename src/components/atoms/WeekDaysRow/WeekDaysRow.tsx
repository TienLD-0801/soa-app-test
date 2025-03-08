import React from "react";
import "./WeekDaysRow.scss";

interface WeekDaysRowProps {
  days?: string[];
}

const WeekDaysRow: React.FC<WeekDaysRowProps> = ({
  days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
}) => {
  return (
    <div className="week-days-row">
      {days.map((day) => (
        <div key={day} className="week-day">
          {day}
        </div>
      ))}
    </div>
  );
};

export default WeekDaysRow;
