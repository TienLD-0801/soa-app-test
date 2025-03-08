import React from "react";
import { Button } from "antd";
import "./ActivityButtons.scss";

interface ActivityButtonProps {
  icon: string;
  label: string;
}

const ActivityButton: React.FC<ActivityButtonProps> = ({ icon, label }) => (
  <Button className="activity-button">
    <img src={icon} alt={label} className="activity-icon" />
    <span className="activity-label">{label}</span>
  </Button>
);

const ActivityButtons: React.FC = () => {
  const activities = [
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z8wLqcaO8SxPzRgN/adventur-2.png",
      label: "Activité 1",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z8wLqcaO8SxPzRgN/fishing.png",
      label: "Activité 2",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z8wLqcaO8SxPzRgN/hunting.png",
      label: "Activité 3",
    },
  ];

  return (
    <div className="activity-buttons-container">
      {activities.map((activity, index) => (
        <ActivityButton
          key={index}
          icon={activity.icon}
          label={activity.label}
        />
      ))}
    </div>
  );
};

export default ActivityButtons;
