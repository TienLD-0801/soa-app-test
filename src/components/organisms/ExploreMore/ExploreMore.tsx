import React from "react";
import {
  ExploreMoreButton,
  ExploreMoreCard,
} from "@/components/molecules/ExploreMoreButton_ExploreMoreCard/ExploreMoreButton_ExploreMoreCard";

import "./ExploreMore.scss";

const ExploreMore: React.FC = () => {
  return (
    <div className="explore-more-layout">
      <div className="explore-more-header">
        <h1 className="explore-more-title">TITRE</h1>
        <div className="explore-more-button-container">
          <ExploreMoreButton text="En Savoir Plus" />
        </div>
      </div>
      <div className="cards-container">
        <div className="card-wrapper">
          <ExploreMoreCard
            imageUrl="https://dashboard.codeparrot.ai/api/image/Z8wVI9G_8Dy7NbA5/image.png"
            title="Case title"
            subtitle="Case sous-titre"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t..."
          />
        </div>
        <div className="card-wrapper">
          <ExploreMoreCard
            imageUrl="https://dashboard.codeparrot.ai/api/image/Z8wVI9G_8Dy7NbA5/image-2.png"
            title="Case title"
            subtitle="Case sous-titre"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t..."
          />
        </div>
        <div className="card-wrapper">
          <ExploreMoreCard
            imageUrl="https://dashboard.codeparrot.ai/api/image/Z8wVI9G_8Dy7NbA5/image-3.png"
            title="Case title"
            subtitle="Case sous-titre"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t..."
          />
        </div>
        <div className="card-wrapper">
          <ExploreMoreCard
            imageUrl="https://dashboard.codeparrot.ai/api/image/Z8wVI9G_8Dy7NbA5/image-3.png"
            title="Case title"
            subtitle="Case sous-titre"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t..."
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
