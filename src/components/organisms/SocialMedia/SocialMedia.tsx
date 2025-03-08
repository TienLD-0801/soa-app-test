import React from "react";
import ShareAdventuresSection from "@/components/molecules/ShareAdventuresSection/ShareAdventuresSection";
import SocialMediaDescription from "@/components/molecules/SocialMediaDescription/SocialMediaDescription";
import SocialMediaCard from "@/components/molecules/SocialMediaCard/SocialMediaCard";
import "./SocialMedia.scss";

const SocialMedia: React.FC = () => {
  return (
    <div className="social-media-layout">
      <ShareAdventuresSection />
      <div className="social-media-container">
        <SocialMediaCard imageUrl="https://dashboard.codeparrot.ai/api/image/Z8waF9G_8Dy7NbBB/image-3.png" />
        <SocialMediaCard imageUrl="https://dashboard.codeparrot.ai/api/image/Z8waF9G_8Dy7NbBB/image-4.png" />
        <SocialMediaCard imageUrl="https://dashboard.codeparrot.ai/api/image/Z8waF9G_8Dy7NbBB/image.png" />
        <SocialMediaCard imageUrl="https://dashboard.codeparrot.ai/api/image/Z8waF9G_8Dy7NbBB/image-2.png" />
      </div>
      <SocialMediaDescription />
    </div>
  );
};

export default SocialMedia;
