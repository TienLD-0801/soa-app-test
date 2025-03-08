import React, { ReactNode } from "react";
import "./ResponsiveContainer.scss";

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  className = "",
  fullWidth = false,
}) => {
  return (
    <div
      className={`responsive-container ${
        fullWidth ? "full-width" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ResponsiveContainer;
