import React from "react";
import "./NavbarElement.scss";

interface NavbarElementProps {
  icon: string;
  label?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavbarElement: React.FC<NavbarElementProps> = ({
  icon,
  label,
  isActive = false,
  onClick,
}) => {
  return (
    <div
      className={`navbar-element ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="icon-container">
        <img src={icon} alt={label} className="icon" />
      </div>
    </div>
  );
};

export default NavbarElement;
