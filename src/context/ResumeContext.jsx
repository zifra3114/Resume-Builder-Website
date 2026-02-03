import React, { createContext, useState } from 'react';

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState(null);
  const [template, setTemplate] = useState('template1');

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData, template, setTemplate }}>
      {children}
    </ResumeContext.Provider>
  );
};
