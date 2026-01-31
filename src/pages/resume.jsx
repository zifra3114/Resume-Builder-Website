import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import "../App.css";

function ResumeForm({ onNext }) {

  // ===== PERSONAL INFO =====
  const [personal, setPersonal] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    profileImgUrl: "",
  });

  // ===== OTHER SECTIONS =====
  const [experience, setExperience] = useState([
    { jobTitle: "", company: "", start: "", end: "", desc: "" },
  ]);

  const [education, setEducation] = useState([
    { degree: "", institute: "", start: "", end: "" },
  ]);

  const [skills, setSkills] = useState([{ name: "" }]);

  // ===== FIREBASE PREFILL =====
  useEffect(() => {
    if (auth.currentUser) {
      setPersonal((prev) => ({
        ...prev,
        name: auth.currentUser.displayName || "",
        email: auth.currentUser.email || "",
      }));
    }
  }, []);

  // ===== HANDLERS =====
  const handlePersonal = (e) =>
    setPersonal({ ...personal, [e.target.name]: e.target.value });

  const handleChange = (index, e, state, setState) => {
    const updated = [...state];
    updated[index][e.target.name] = e.target.value;
    setState(updated);
  };

  const addItem = (state, setState, emptyObj) =>
    setState([...state, emptyObj]);

  const removeItem = (index, state, setState) =>
    setState(state.filter((_, i) => i !== index));

  // ===== COMPLETE FORM VALIDATION =====
  const isFormComplete = () => {
    if (!personal.name || !personal.title || !personal.email || !personal.phone || !personal.summary)
      return false;

    if (experience.some(e => !e.jobTitle || !e.company || !e.start)) return false;
    if (education.some(e => !e.degree || !e.institute)) return false;
    if (skills.some(s => !s.name)) return false;

    return true;
  };

  const handleNext = () => {
    if (isFormComplete()) {
      onNext({ personal, experience, education, skills });
    }
  };

  return (
    <div id="resume" style={{ maxWidth: "800px", margin: "40px auto", background: "#111", color: "#fff", padding: "30px", borderRadius: "12px" }}>
      <h1 style={{ textAlign: "center" }}>Resume Builder</h1>

      {/* PERSONAL INFO */}
      <h2>Personal Info</h2>
      <input name="name" placeholder="Full Name" value={personal.name} onChange={handlePersonal} required />
      <input name="title" placeholder="Professional Title" value={personal.title} onChange={handlePersonal} required />
      <input name="email" placeholder="Email" value={personal.email} onChange={handlePersonal} required />
      <input name="phone" placeholder="Phone" value={personal.phone} onChange={handlePersonal} required />
      <textarea name="summary" placeholder="Summary" value={personal.summary} onChange={handlePersonal} required />

      {/* EXPERIENCE */}
      <h2>Experience</h2>
      {experience.map((item, i) => (
        <div key={i}>
          <input name="jobTitle" placeholder="Job Title" value={item.jobTitle}
            onChange={(e) => handleChange(i, e, experience, setExperience)} />
          <input name="company" placeholder="Company" value={item.company}
            onChange={(e) => handleChange(i, e, experience, setExperience)} />
          <input name="start" placeholder="Start Date" value={item.start}
            onChange={(e) => handleChange(i, e, experience, setExperience)} />
          <button onClick={() => removeItem(i, experience, setExperience)}>Remove</button>
        </div>
      ))}
      <button onClick={() => addItem(experience, setExperience, { jobTitle: "", company: "", start: "", end: "", desc: "" })}>
        + Add Experience
      </button>

      {/* EDUCATION */}
      <h2>Education</h2>
      {education.map((item, i) => (
        <div key={i}>
          <input name="degree" placeholder="Degree" value={item.degree}
            onChange={(e) => handleChange(i, e, education, setEducation)} />
          <input name="institute" placeholder="Institute" value={item.institute}
            onChange={(e) => handleChange(i, e, education, setEducation)} />
        </div>
      ))}
      <button onClick={() => addItem(education, setEducation, { degree: "", institute: "", start: "", end: "" })}>
        + Add Education
      </button>

      {/* SKILLS */}
      <h2>Skills</h2>
      {skills.map((item, i) => (
        <div key={i}>
          <input name="name" placeholder="Skill" value={item.name}
            onChange={(e) => handleChange(i, e, skills, setSkills)} />
        </div>
      ))}
      <button onClick={() => addItem(skills, setSkills, { name: "" })}>
        + Add Skill
      </button>

      {/* NEXT BUTTON */}
      <button
        disabled={!isFormComplete()}
        onClick={handleNext}
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "14px",
          fontSize: "18px",
          background: isFormComplete() ? "linear-gradient(135deg,#80118f,#5519bd)" : "#555",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: isFormComplete() ? "pointer" : "not-allowed",
        }}
      >
        Next → Preview Resume
      </button>
    </div>
  );
}

export default ResumeForm;
