import React, { useState } from "react";
import { Tooltip } from "antd";

import "./MapContainer.scss";

interface MapPinProps {
  iconUrl: string;
  position: {
    top: string;
    left: string;
  };
  label?: string;
}

const MapPin: React.FC<MapPinProps> = ({
  iconUrl,
  position,
  label = "Location",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tooltip title={label} placement="top">
      <div
        className={`map-pin ${isHovered ? "hovered" : ""}`}
        style={position}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="map-pin-icon">
          <img src={iconUrl} alt={label} />
        </div>
        <div className="map-pin-marker" />
        <div className="map-pin-pulse" />
      </div>
    </Tooltip>
  );
};

interface LocationLabelProps {
  imageUrl?: string;
  text?: string;
}

const LocationLabel: React.FC<LocationLabelProps> = ({
  imageUrl = "https://dashboard.codeparrot.ai/api/image/Z8yMhNG_8Dy7NbCI/image-2.png",
  text = "Emplacement",
}) => {
  return (
    <div className="location-label">
      <img src={imageUrl} alt="location" className="location-icon" />
      <span className="location-text">{text}</span>
    </div>
  );
};

interface MapContainerProps {
  backgroundImage?: string;
  children?: React.ReactNode;
}

const MapContainer: React.FC<MapContainerProps> = ({
  backgroundImage = "https://dashboard.codeparrot.ai/api/image/Z8yMhNG_8Dy7NbCI/image-21.png",
  children,
}) => {
  return (
    <div className="map-container">
      <div
        className="map-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <LocationLabel />
        {children}
      </div>
      <div className="map-pins">
        <MapPin
          iconUrl="https://dashboard.codeparrot.ai/api/image/Z8yMhNG_8Dy7NbCI/vector.png"
          position={{ top: "30%", left: "35%" }}
          label="Mountain Trail"
        />
        <MapPin
          iconUrl="https://dashboard.codeparrot.ai/api/image/Z8yMhNG_8Dy7NbCI/crosshai.png"
          position={{ top: "45%", left: "60%" }}
          label="River Activities"
        />
        <MapPin
          iconUrl="https://dashboard.codeparrot.ai/api/image/Z8yMhNG_8Dy7NbCI/compass.png"
          position={{ top: "65%", left: "30%" }}
          label="Adventure Camp"
        />
      </div>
    </div>
  );
};

export default MapContainer;
