import React from "react";

import SectionHeader from "@/components/molecules/SectionHeader/SectionHeader";
import ActivityButtons from "@/components/molecules/ActivityButtons/ActivityButtons";
import MapContainer from "@/components/molecules/MapContainer/MapContainer";

import "./TitreBlockSecond.scss";

const TitreBlockSecond: React.FC = () => {
  return (
    <div className="block-second-container">
      <SectionHeader title="TITRE BLOC 2" />
      <div className="section-content">
        <ActivityButtons />
        <MapContainer backgroundImage="images/map.png" />
      </div>
    </div>
  );
};

export default TitreBlockSecond;
