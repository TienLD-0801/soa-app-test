import React from "react";
import { Input } from "antd";
import "./InputFields.scss";

interface InputFieldsProps {
  onNameChange?: (name: string) => void;
  onEmailChange?: (email: string) => void;
}

const InputFields: React.FC<InputFieldsProps> = ({
  onNameChange = () => {},
  onEmailChange = () => {},
}) => {
  return (
    <div className="input-fields-container">
      <div className="input-field-row">
        <label className="field-label">Nom:</label>
        <div className="input-wrapper">
          <Input
            type="text"
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Entrez votre nom"
            className="text-input"
          />
        </div>
      </div>
      <div className="input-field-row">
        <label className="field-label">Email:</label>
        <div className="input-wrapper">
          <Input
            type="email"
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="Entrez votre e-mail"
            className="text-input"
          />
        </div>
      </div>
    </div>
  );
};

export default InputFields;
