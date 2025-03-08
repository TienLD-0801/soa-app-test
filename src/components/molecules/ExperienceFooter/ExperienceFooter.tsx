import React from "react";
import "./ExperienceFooter.scss";
import { Typography } from "antd";

interface IconItem {
  icon: string;
  title: string;
  description: string;
}

const ExperienceFooter: React.FC = () => {
  const icons: IconItem[] = [
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z8wXgtG_8Dy7NbA6/icon.png",
      title: "Authenticité",
      description: "Sous-titre",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z8wXgtG_8Dy7NbA6/containe.png",
      title: "Respect",
      description: "Sous-titre",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z8wXgtG_8Dy7NbA6/containe-2.png",
      title: "Diversité",
      description: "Sous-titre",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z8wXgtG_8Dy7NbA6/containe-3.png",
      title: "Personnalisation",
      description: "Sous-titre",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z8wXgtG_8Dy7NbA6/footer-i.png",
      title: "Confort",
      description: "Sous-titre",
    },
  ];

  return (
    <div className="experience-footer-icons">
      <div className="icon-container">
        {icons.map((item, index) => (
          <div key={index} className="icon-column">
            <div className="icon-wrapper">
              <img src={item.icon} alt={item.title} className="icon" />
            </div>
            <div className="text-container">
              <Typography.Title level={3} className="title">
                {item.title}
              </Typography.Title>
              <Typography.Text className="description">
                {item.description}
              </Typography.Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceFooter;
