import React, { useState } from "react";
import ResumeForm from "./resume";
import ResumeTemplate from "./ResumeTemplate";

function ResumeBuilder() {
  const [step, setStep] = useState(1);
  const [resumeData, setResumeData] = useState(null);

  const handleNext = (data) => {
    setResumeData(data);
    setStep(2);
  };

  return (
    <div>
      {step === 1 && <ResumeForm onNext={handleNext} />}
      {step === 2 && resumeData && <ResumeTemplate data={resumeData} />}
    </div>
  );
}

export default ResumeBuilder;
