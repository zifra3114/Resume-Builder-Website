import React, { useState } from "react";
import ResumeForm from "./ResumeForm";
import ResumePreview from "./ResumePreview";

function ResumeBuilder() {
  const [step, setStep] = useState(1);
  const [resumeData, setResumeData] = useState(null);

  const handleNext = (data) => {
    setResumeData(data);   // ✅ DATA STORED
    setStep(2);            // ✅ OPEN TEMPLATE
  };

  return (
    <>
      {step === 1 && <ResumeForm onNext={handleNext} />}
      {step === 2 && <ResumePreview data={resumeData} />}
    </>
  );
}

export default ResumeBuilder;
