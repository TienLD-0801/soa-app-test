import React from "react";
import InputFields from "@/components/atoms/InputFields/InputFields";
import MessageEditor from "@/components/atoms/MessageEditor/MessageEditor";
import FileAttachment from "@/components/atoms/FileAttachment/FileAttachment";
import ButtonGroup from "@/components/atoms/ButtonGroup/ButtonGroup";

import "./ContactForm.scss";

const ContactForm: React.FC = () => {
  return (
    <div className="contact-form-layout">
      <div className="contact-form-content">
        <div className="input-fields-section">
          <InputFields />
        </div>
        <div className="message-editor-section">
          <MessageEditor />
        </div>
        <div className="file-attachment-section">
          <FileAttachment />
        </div>
      </div>
      <div className="contact-form-actions">
        <ButtonGroup />
      </div>
    </div>
  );
};

export default ContactForm;
