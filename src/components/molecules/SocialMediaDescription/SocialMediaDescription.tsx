import React from "react";
import "./SocialMediaDescription.scss";
interface SocialMediaDescriptionProps {
  text?: string;
}
const SocialMediaDescription: React.FC<SocialMediaDescriptionProps> = ({
  text = "Consultez @BASIC et #BASIC pour découvrir les expériences inoubliables des pourvoiries et activités BASIC.",
}) => {
  return (
    <div className="social-media-section-description">
      {" "}
      <p>
        {" "}
        {text.split("@BASIC").map((part, index) => (
          <React.Fragment key={index}>
            {" "}
            {index > 0 && <span className="handle">@BASIC</span>}{" "}
            {part.split("#BASIC").map((subPart, subIndex) => (
              <React.Fragment key={subIndex}>
                {" "}
                {subIndex > 0 && <span className="hashtag">#BASIC</span>}{" "}
                {subPart}{" "}
              </React.Fragment>
            ))}{" "}
          </React.Fragment>
        ))}{" "}
      </p>{" "}
    </div>
  );
};
export default SocialMediaDescription;
