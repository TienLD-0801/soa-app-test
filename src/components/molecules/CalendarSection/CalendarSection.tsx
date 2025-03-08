import React, { useState } from "react";
import WeekDaysRow from "@/components/atoms/WeekDaysRow/WeekDaysRow";
import CalendarGrid from "@/components/atoms/CalendarGrid/CalendarGrid";
import CalendarHeader from "@/components/atoms/CalendarHeader/CalendarHeader";

import "./CalendarSection.scss";

const CalendarSection: React.FC = () => {
  const [currentMonth, _] = useState("July 2025");

  const handlePrevMonth = () => {
    console.log("Previous month clicked");
  };

  const handleNextMonth = () => {
    console.log("Next month clicked");
  };

  return (
    <div className="calendar-layout">
      <CalendarHeader
        currentMonth={currentMonth}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <WeekDaysRow />
      <CalendarGrid />
    </div>
  );
};

export default CalendarSection;
