import React from "react";
import { Card, Button, Typography } from "antd";

import "./CardAdventure.scss";

const { Title, Text } = Typography;

interface AdventureCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  forfaitNumber: number;
  onClick?: () => void;
}

const CardAdventure: React.FC<AdventureCardProps> = ({
  image,
  title,
  subtitle,
  description,
  forfaitNumber,
  onClick,
}) => {
  return (
    <Card
      className="adventure-card"
      cover={<img alt={title} src={image} className="adventure-card__image" />}
    >
      <div className="adventure-card__content">
        <div className="adventure-card__text-container">
          <Title level={3} className="adventure-card__title">
            {title}
          </Title>
          <Title level={4} className="adventure-card__subtitle">
            {subtitle}
          </Title>
          <Text className="adventure-card__description">{description}</Text>
        </div>
        <Button className="adventure-card__button" onClick={onClick}>
          <span className="adventure-card__button-text">
            Forfait {forfaitNumber}
          </span>
          <img
            src={`https://dashboard.codeparrot.ai/api/image/Z8wKAMaO8SxPzRgL/arrow-up-r${
              forfaitNumber > 1 ? `-${forfaitNumber}` : ""
            }.png`}
            alt="arrow"
            className="adventure-card__button-icon"
          />
        </Button>
      </div>
    </Card>
  );
};

export default CardAdventure;
