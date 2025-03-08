import React from "react";
import ExperiencesCard from "@/components/molecules/ExperiencesCard/ExperiencesCard";
import ExperienceFooter from "@/components/molecules/ExperienceFooter/ExperienceFooter";

import "./Experiences.scss";

const Experiences: React.FC = () => {
  return (
    <div className="experiences-layout">
      <div className="experiences-section-container">
        <ExperiencesCard
          title="Des expériences inoubliables avec BASIC"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eros at lacus mollis efficitur. Vivamus posuere feugiat justo, vel commodo mauris malesuada in. Maecenas facilisis, orci ac aliquam luctus, neque quam sodales eros, non pulvinar nisi nisi id arcu."
        />
        <img
          src="https://dashboard.codeparrot.ai/api/image/Z8wXgtG_8Dy7NbA6/image.png"
          alt="Experiences"
          className="ice-cream-image"
          loading="lazy"
        />
      </div>
      <div className="footer-icons-container">
        <ExperienceFooter />
      </div>
    </div>
  );
};

export default Experiences;
