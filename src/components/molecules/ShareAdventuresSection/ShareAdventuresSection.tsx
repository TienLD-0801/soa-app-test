import React from "react";
import { Card } from "antd";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import "./ShareAdventuresSection.scss";

interface ShareAdventuresSectionProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  date?: string;
  imageTitle?: string;
  imageDescription?: string;
}

const ShareAdventuresSection: React.FC<ShareAdventuresSectionProps> = ({
  title = "Immortalisez des moments inoubliables avec #BASIC",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially",
  imageUrl = "https://dashboard.codeparrot.ai/api/image/Z8waF9G_8Dy7NbBB/brooke-l.png",
  date = "24 Sep 2024",
  imageTitle = "La famille",
  imageDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
}) => {
  const isMobile = useMediaQuery("(max-width: 480px)");
  const isTablet = useMediaQuery("(max-width: 768px)");

  const truncatedDescription = isMobile
    ? description.substring(0, 100) + "..."
    : isTablet
    ? description.substring(0, 180) + "..."
    : description;

  const truncatedImageDescription = isMobile
    ? imageDescription.substring(0, 60) + "..."
    : isTablet
    ? imageDescription.substring(0, 80) + "..."
    : imageDescription;

  return (
    <div className="share-adventures-section">
      <div className="share-adventures-container">
        <div className="share-adventures-text">{truncatedDescription}</div>
        <h1 className="share-adventures-title">{title}</h1>
      </div>

      <Card
        className="share-adventures-image-container"
        cover={
          <img
            src={imageUrl}
            alt="Share your adventures"
            className="main-image"
            loading="lazy"
          />
        }
      >
        <div className="share-adventures-image-content">
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z8waF9G_8Dy7NbBB/brooke-l-2.png"
            alt="Featured content"
            className="featured-image"
            loading="lazy"
          />
          <div className="image-text-container">
            <div className="text-content">
              <h2 className="image-title">{imageTitle}</h2>
              <p className="image-description">{truncatedImageDescription}</p>
            </div>
            <div className="date-container">
              <span className="date">{date}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ShareAdventuresSection;
