import React from "react";
import { Card, Button, Typography } from "antd";
import "./ExploreMoreButton_ExploreMoreCard.scss";

const { Title, Text } = Typography;

interface ExploreMoreButtonProps {
  text?: string;
}

interface ExploreMoreCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
}

export const ExploreMoreButton: React.FC<ExploreMoreButtonProps> = ({
  text = "En savoir plus",
}) => {
  return (
    <Button type="link" className="explore-more-button">
      <span>{text}</span>
      <img
        src="https://dashboard.codeparrot.ai/api/image/Z8wVI9G_8Dy7NbA5/arrow-rig.png"
        alt="arrow"
      />
      <div className="underline" />
    </Button>
  );
};

export const ExploreMoreCard: React.FC<ExploreMoreCardProps> = ({
  imageUrl = "https://dashboard.codeparrot.ai/api/image/Z8wVI9G_8Dy7NbA5/image.png",
  title = "Case title",
  subtitle = "Case sous-titre",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}) => {
  return (
    <Card
      styles={{
        body: {
          padding: "0 24px",
        },
      }}
      style={{
        border: "none",
      }}
      hoverable
      cover={<img alt={title} src={imageUrl} className="card-image" />}
      className="explore-more-card"
    >
      <div className="card-content">
        <div className="text-container">
          <Title level={4} className="title">
            {title}
          </Title>
          <Text className="subtitle">{subtitle}</Text>
        </div>
        <div className="button-container">
          <div className="vertical-line" />
          <Text className="description">{description}</Text>
        </div>
      </div>
    </Card>
  );
};

export default {
  ExploreMoreButton,
  ExploreMoreCard,
};
