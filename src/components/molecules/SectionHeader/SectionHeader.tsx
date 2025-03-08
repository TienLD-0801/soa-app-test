import React from "react";
import "./SectionHeader.scss";

interface SectionHeaderProps {
  title?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title = "TITRE BLOC 2",
}) => {
  return (
    <div className="section-header">
      <div className="line left-line"></div>
      <h2 className="title">{title}</h2>
      <div className="line right-line"></div>
    </div>
  );
};

export default SectionHeader;
