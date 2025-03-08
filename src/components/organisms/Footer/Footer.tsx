import React from "react";
import FooterContainer from "@/components/molecules/FooterContainer/FooterContainer";
import FooterBottomContainer from "@/components/molecules/FooterBottomContainer/FooterBottomContainer";

import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer-layout">
      <FooterContainer />
      <FooterBottomContainer />
    </div>
  );
};

export default Footer;
