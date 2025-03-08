import React from "react";
import { Card, Avatar } from "antd";
import "./SocialMediaCard.scss";

interface SocialMediaCardProps {
  imageUrl: string;
  username?: string;
  instagramIcon?: string;
  arrowIcon?: string;
}

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({
  imageUrl,
  username = "Anthony Durand",
  instagramIcon = "https://dashboard.codeparrot.ai/api/image/Z8waF9G_8Dy7NbBB/mdi-inst.png",
  arrowIcon = "https://dashboard.codeparrot.ai/api/image/Z8waF9G_8Dy7NbBB/arrow-up-r.png",
}) => {
  return (
    <div className="social-media-card-container">
      <Card
        className="social-media-card"
        cover={
          <div className="image-container">
            <img
              src={imageUrl}
              alt="Social media content"
              className="social-media-image"
            />
          </div>
        }
        bordered={false}
        bodyStyle={{ padding: 0 }}
      ></Card>
      <div className="social-media-content">
        <div className="text-container">
          <Avatar
            src={instagramIcon}
            alt="Instagram"
            className="instagram-icon"
          />
          <span className="username">{username}</span>
        </div>
        <Avatar src={arrowIcon} alt="Arrow" className="arrow-icon" />
      </div>
    </div>
  );
};

export default SocialMediaCard;
