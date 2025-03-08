import React from "react";
import { Layout } from "antd";

import "./FooterBottomContainer.scss";

interface FooterBottomProps {
  year?: number;
}

export const FooterBottom: React.FC<FooterBottomProps> = ({ year = 2024 }) => {
  const socialIcons = [
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z8yI7caO8SxPzRhZ/facebook.png",
      alt: "Facebook",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z8yI7caO8SxPzRhZ/instagra.png",
      alt: "Instagram",
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z8yI7caO8SxPzRhZ/youtube.png",
      alt: "Youtube",
    },
  ];

  return (
    <Layout.Footer className="footer-bottom-container">
      <div className="footer-line" />
      <div className="footer-bottom-content">
        <div className="footer-copyright">© BASIC {year}</div>
        <div className="footer-social-container">
          {socialIcons.map((social, index) => (
            <button
              key={index}
              className="social-icon-button"
              onClick={() => console.log(`Clicked ${social.alt}`)}
            >
              <img src={social.icon} alt={social.alt} className="social-icon" />
            </button>
          ))}
        </div>
      </div>
    </Layout.Footer>
  );
};

export default FooterBottom;
