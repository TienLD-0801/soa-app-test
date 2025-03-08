import React from "react";

import "./MessageEditor.scss";

const MessageEditor: React.FC = () => {
  const formatButtons = [
    { icon: "monotone.png", alt: "Bold" },
    { icon: "monotone-2.png", alt: "Italic" },
    { icon: "monotone-3.png", alt: "Underline" },
    { icon: "monotone-4.png", alt: "Strike" },
    { icon: "monotone-5.png", alt: "Superscript" },
    { icon: "monotone-6.png", alt: "Subscript" },
  ];

  const alignmentButtons = [
    { icon: "monotone-7.png", alt: "Align Left" },
    { icon: "monotone-8.png", alt: "Align Center" },
    { icon: "monotone-9.png", alt: "Align Right" },
  ];

  const listButtons = [
    { icon: "monotone-10.png", alt: "Bullet List" },
    { icon: "monotone-11.png", alt: "Number List" },
  ];

  const additionalButtons = [
    { icon: "monotone-12.png", alt: "Link" },
    { icon: "monotone-13.png", alt: "Image" },
  ];

  return (
    <div className="message-editor-container">
      <label>Message:</label>
      <div className="message-editor">
        <div className="toolbar">
          <div className="font-size-selector">
            <span className="font-size">18</span>
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z8xjysaO8SxPzRg_/caret-up-d.png"
              alt="Size selector"
            />
          </div>
          <div className="format-buttons">
            {formatButtons.map((button, index) => (
              <button key={index} className="toolbar-button">
                <img
                  src={`https://dashboard.codeparrot.ai/api/image/Z8xjysaO8SxPzRg_/${button.icon}`}
                  alt={button.alt}
                />
              </button>
            ))}
          </div>
          <div className="alignment-buttons">
            {alignmentButtons.map((button, index) => (
              <button key={index} className="toolbar-button">
                <img
                  src={`https://dashboard.codeparrot.ai/api/image/Z8xjysaO8SxPzRg_/${button.icon}`}
                  alt={button.alt}
                />
              </button>
            ))}
          </div>
          <div className="list-buttons">
            {listButtons.map((button, index) => (
              <button key={index} className="toolbar-button">
                <img
                  src={`https://dashboard.codeparrot.ai/api/image/Z8xjysaO8SxPzRg_/${button.icon}`}
                  alt={button.alt}
                />
              </button>
            ))}
          </div>
          <div className="additional-buttons">
            {additionalButtons.map((button, index) => (
              <button key={index} className="toolbar-button">
                <img
                  src={`https://dashboard.codeparrot.ai/api/image/Z8xjysaO8SxPzRg_/${button.icon}`}
                  alt={button.alt}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="editor-content">
          <h2>Heading 6</h2>
          <div className="editor-text">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageEditor;
