import React from "react";
import NavbarElement from "@/components/atoms/NavbarElement/NavbarElement";

import "./HeroBanner.scss";

const HeroBanner: React.FC = () => {
  return (
    <div className="hero-banner">
      <img
        src="images/herror_background.png"
        alt="Hero banner"
        className="hero-banner__image"
      />
      <div className="hero-banner__content">
        <div className="hero-banner__navbar">
          <div className="navbar">
            <NavbarElement
              icon="svg/mountain.svg"
              label="Mountain"
              isActive={true}
            />
            <NavbarElement icon="svg/fishing-28.svg" label="Fishing" />
            <NavbarElement icon="svg/crosshair-28.svg" label="Activities" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
