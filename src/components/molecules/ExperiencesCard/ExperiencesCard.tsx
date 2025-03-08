import React from "react";
import "./ExperiencesCard.scss";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

interface ExperiencesCardProps {
  title?: string;
  description?: string;
}

const ExperiencesCard: React.FC<ExperiencesCardProps> = ({
  title = "Des expériences inoubliables Lorem Ipsum truc",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
}) => {
  return (
    <div className="experiences-card">
      <div className="experiences-card-content">
        <Title level={1} className="experiences-card-title">
          {title}
        </Title>
      </div>
      <div className="experiences-card-description-container">
        <div className="experiences-card-description-header">
          <div className="line"></div>
          <Title level={2} className="experiences-card-description-title">
            À propos de BASIC
          </Title>
        </div>
        <div className="experiences-card-description-text">
          <Paragraph className="experiences-card-description">
            {description}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesCard;
