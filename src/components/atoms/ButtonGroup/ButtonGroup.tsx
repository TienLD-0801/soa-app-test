import React from "react";
import { Button } from "antd";
import "./ButtonGroup.scss";

interface ButtonGroupProps {
  onClear?: () => void;
  onSubmit?: () => void;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  onClear = () => console.log("Clear clicked"),
  onSubmit = () => console.log("Submit clicked"),
}) => {
  return (
    <div className="button-group">
      <Button className="clear-button" onClick={onClear}>
        Clear All
      </Button>
      <Button
        className="submit-button"
        onClick={onSubmit}
        iconPosition="end"
        icon={
          <img src="svg/send.svg" alt="send" width={24} height={24} />
        }
      >
        Envoyer
      </Button>
    </div>
  );
};

export default ButtonGroup;
