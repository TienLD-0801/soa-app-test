import React from "react";
import "./CalendarGrid.scss";

interface CalendarDay {
  date: number;
  status: "libre" | "occupé" | "disabled";
  currentMonth: boolean;
}

const CalendarGrid: React.FC = () => {
  const calendarDays: CalendarDay[] = [
    { date: 27, status: "disabled", currentMonth: false },
    { date: 28, status: "disabled", currentMonth: false },
    { date: 29, status: "disabled", currentMonth: false },
    { date: 30, status: "disabled", currentMonth: false },
    { date: 1, status: "occupé", currentMonth: true },
    { date: 2, status: "occupé", currentMonth: true },
    { date: 3, status: "libre", currentMonth: true },
    { date: 4, status: "occupé", currentMonth: true },
    { date: 5, status: "libre", currentMonth: true },
    { date: 6, status: "libre", currentMonth: true },
    { date: 7, status: "libre", currentMonth: true },
    { date: 8, status: "libre", currentMonth: true },
    { date: 9, status: "libre", currentMonth: true },
    { date: 10, status: "libre", currentMonth: true },
    { date: 11, status: "occupé", currentMonth: true },
    { date: 12, status: "libre", currentMonth: true },
    { date: 13, status: "libre", currentMonth: true },
    { date: 14, status: "libre", currentMonth: true },
    { date: 15, status: "occupé", currentMonth: true },
    { date: 16, status: "occupé", currentMonth: true },
    { date: 17, status: "occupé", currentMonth: true },
    { date: 18, status: "libre", currentMonth: true },
    { date: 19, status: "libre", currentMonth: true },
    { date: 20, status: "occupé", currentMonth: true },
    { date: 21, status: "libre", currentMonth: true },
    { date: 22, status: "libre", currentMonth: true },
    { date: 23, status: "libre", currentMonth: true },
    { date: 24, status: "libre", currentMonth: true },
    { date: 25, status: "libre", currentMonth: true },
    { date: 26, status: "libre", currentMonth: true },
    { date: 27, status: "libre", currentMonth: true },
    { date: 28, status: "libre", currentMonth: true },
    { date: 29, status: "libre", currentMonth: true },
    { date: 30, status: "libre", currentMonth: true },
    { date: 31, status: "libre", currentMonth: true },
  ];

  const renderCalendarDays = () => {
    const rows = [];
    for (let i = 0; i < calendarDays.length; i += 7) {
      const weekDays = calendarDays.slice(i, i + 7);
      rows.push(
        <div key={i} className="calendar-row">
          {weekDays.map((day, index) => (
            <div
              key={index}
              className={`calendar-cell ${day.status} ${
                !day.currentMonth ? "disabled" : ""
              }`}
            >
              <span className="date">{day.date}</span>
              <span className="status">
                {day.status === "libre"
                  ? "Libre"
                  : day.status === "occupé"
                  ? "Occupé"
                  : ""}
              </span>
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };

  return <div className="calendar-grid">{renderCalendarDays()}</div>;
};

export default CalendarGrid;
