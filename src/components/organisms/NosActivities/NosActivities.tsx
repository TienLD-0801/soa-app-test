import React from "react";
import "./NosActivities.scss";
import SectionHeader from "@/components/molecules/SectionHeader/SectionHeader";
import CalendarSection from "@/components/molecules/CalendarSection/CalendarSection";
import ContactForm from "@/components/molecules/ContactForm/ContactForm";

const NosActivities: React.FC = () => {
  return (
    <div className="nos-activities-container">
      <SectionHeader title="NosActivities" />
      <div className="content-section">
        <CalendarSection />
        <ContactForm />
      </div>
    </div>
  );
};

export default NosActivities;
