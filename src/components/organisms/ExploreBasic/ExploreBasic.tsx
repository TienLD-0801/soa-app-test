import React from "react";
import { Button, Typography } from "antd";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import "./ExploreBasic.scss";

interface ExploreBasicProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onExplore?: () => void;
}

export const ExploreBasic: React.FC<ExploreBasicProps> = ({
  title = "Explorez Avec BASIC Dès Aujourd'hui",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  buttonText = "Explorer",
  onExplore = () => console.log("Explore clicked"),
}) => {
  const isMobile = useMediaQuery("(max-width: 480px)");
  const isTablet = useMediaQuery("(max-width: 768px)");

  return (
    <div className="explore-basic">
      <div className="explore-basic__background">
        <img
          src="https://dashboard.codeparrot.ai/api/image/Z8wdb8aO8SxPzRgS/mask-gro.png"
          alt="background"
          className="explore-basic__mask"
        />
      </div>

      <div className="explore-basic__content">
        <div className="explore-basic__text-container">
          <Typography.Title
            level={isMobile ? 2 : 1}
            className="explore-basic__title"
          >
            {title}
          </Typography.Title>
          <Typography.Paragraph className="explore-basic__description">
            {isTablet ? description.substring(0, 120) + "..." : description}
          </Typography.Paragraph>

          <Button
            type="primary"
            className="explore-basic__button"
            onClick={onExplore}
            size={isMobile ? "middle" : "large"}
          >
            {buttonText}
          </Button>

          <div className="explore-basic__frame">
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z8wdb8aO8SxPzRgS/frame-20.png"
              alt="frame"
            />
          </div>
        </div>

        <div className="explore-basic__line">
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z8wdb8aO8SxPzRgS/line-23.png"
            alt="line"
          />
        </div>
      </div>
    </div>
  );
};
