import React from "react";
import "./FileAttachment.scss";

const FileAttachment: React.FC = () => {
  return (
    <div className="file-attachment-container">
      <div className="file-label">Fichier:</div>
      <div className="attachment-section">
        <img
          src="svg/paperclip.svg"
          alt="paperclip"
          className="paperclip-icon"
        />
        <span className="attachment-text">Pièce jointe</span>
      </div>
      <div className="file-type-hint">(*fichiers pdf uniquement)</div>
    </div>
  );
};

export default FileAttachment;
