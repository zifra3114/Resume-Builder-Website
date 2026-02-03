import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import resumeBg from "../assets/login.png";
import { ResumeContext } from "../context/ResumeContext";
import "../App.css";

function ResumeForm() {
  const navigate = useNavigate();
  const { setResumeData } = useContext(ResumeContext);

  const [personal, setPersonal] = useState({
    name: "", title: "", email: "", phone: "",
    address: "", summary: "", profileImg: null,
  });

  const [experience, setExperience] = useState([
    { jobTitle: "", company: "", start: "", end: "", desc: "" }
  ]);

  const [education, setEducation] = useState([
    { degree: "", institute: "", start: "", end: "" }
  ]);

  const [skills, setSkills] = useState([{ name: "" }]);
  const [languages, setLanguages] = useState([{ name: "" }]);
  const [projects, setProjects] = useState([{ title: "", desc: "" }]);
  const [certifications, setCertifications] = useState([{ title: "", issuer: "" }]);
  const [achievements, setAchievements] = useState([{ title: "" }]);

  const handlePersonal = e =>
    setPersonal({ ...personal, [e.target.name]: e.target.value });

  const handleFileChange = e =>
    e.target.files &&
    setPersonal({ ...personal, profileImg: e.target.files[0] });

  const handleChange = (index, e, state, setState) => {
    const updated = [...state];
    updated[index][e.target.name] = e.target.value;
    setState(updated);
  };

  const addItem = (state, setState, emptyObj) =>
    setState([...state, emptyObj]);

  const removeItem = (index, state, setState) =>
    setState(state.filter((_, i) => i !== index));

  const getValidationErrors = () => {
    const errors = [];
    if (!personal.name) errors.push("<b>Personal Info:</b> Full Name is required.");
    if (!personal.title) errors.push("<b>Personal Info:</b> Professional Title is required.");
    if (!personal.email) errors.push("<b>Personal Info:</b> Email is required.");
    if (!personal.phone) errors.push("<b>Personal Info:</b> Phone is required.");

    if (experience.length === 0 || !experience[0].jobTitle || !experience[0].company || !experience[0].start) {
      errors.push("<b>Experience:</b> At least one entry with Job Title, Company, and Start Date is required.");
    }

    if (education.length === 0 || !education[0].degree || !education[0].institute) {
      errors.push("<b>Education:</b> At least one entry with Degree and Institute is required.");
    }
    
    if (skills.length === 0 || !skills[0].name) {
      errors.push("<b>Skills:</b> At least one skill is required.");
    }
    
    return errors;
  };

  const handleNext = () => {
    const errors = getValidationErrors();
    if (errors.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Incomplete Form",
        html: `<div style="text-align: left; display: inline-block;">${errors.join('<br>')}</div>`,
        background: "rgba(0,0,0,0.85)",
        color: "#fff",
        confirmButtonColor: "#9c27ff",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Form Complete!",
      text: "Choose Template",
      background: "rgba(0,0,0,0.85)",
      color: "#fff",
      confirmButtonColor: "#9c27ff",
    }).then(() => {
      setResumeData({
        personal,
        experience,
        education,
        skills,
        languages,
        projects,
        certifications,
        achievements,
      });

      navigate("/template");
    });
  };

  return (
    <div
      className="resume-bg"
      style={{ backgroundImage: `url(${resumeBg})` }}
    >
      <div className="resume-overlay">
        <div className="resume-form-container" data-aos="flip-left">
          <h1>Resume Builder</h1>

          <section>
            <h2>Personal Info</h2>
            <input name="name" placeholder="Full Name" value={personal.name} onChange={handlePersonal} />
            <input name="title" placeholder="Professional Title" value={personal.title} onChange={handlePersonal} />
            <input name="email" placeholder="Email" value={personal.email} onChange={handlePersonal} />
            <input name="phone" placeholder="Phone" value={personal.phone} onChange={handlePersonal} />
            <input name="address" placeholder="Address" value={personal.address} onChange={handlePersonal} />
            <textarea name="summary" placeholder="Summary" value={personal.summary} onChange={handlePersonal} />
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </section>

          <section>
            <h2>Experience</h2>
            {experience.map((exp, i) => (
              <div key={i} className="dynamic-section">
                <input name="jobTitle" placeholder="Job Title" value={exp.jobTitle} onChange={e => handleChange(i, e, experience, setExperience)} />
                <input name="company" placeholder="Company" value={exp.company} onChange={e => handleChange(i, e, experience, setExperience)} />
                <input name="start" placeholder="Start Date" value={exp.start} onChange={e => handleChange(i, e, experience, setExperience)} />
                <input name="end" placeholder="End Date" value={exp.end} onChange={e => handleChange(i, e, experience, setExperience)} />
                <textarea name="desc" placeholder="Description" value={exp.desc} onChange={e => handleChange(i, e, experience, setExperience)} />
                {i > 0 && <button type="button" onClick={() => removeItem(i, experience, setExperience)}>Remove</button>}
              </div>
            ))}
            <button type="button" onClick={() => addItem(experience, setExperience, { jobTitle: "", company: "", start: "", end: "", desc: "" })}>Add Experience</button>
          </section>

          <section>
            <h2>Education</h2>
            {education.map((edu, i) => (
              <div key={i} className="dynamic-section">
                <input name="degree" placeholder="Degree" value={edu.degree} onChange={e => handleChange(i, e, education, setEducation)} />
                <input name="institute" placeholder="Institute" value={edu.institute} onChange={e => handleChange(i, e, education, setEducation)} />
                <input name="start" placeholder="Start Year" value={edu.start} onChange={e => handleChange(i, e, education, setEducation)} />
                <input name="end" placeholder="End Year" value={edu.end} onChange={e => handleChange(i, e, education, setEducation)} />
                {i > 0 && <button type="button" onClick={() => removeItem(i, education, setEducation)}>Remove</button>}
              </div>
            ))}
            <button type="button" onClick={() => addItem(education, setEducation, { degree: "", institute: "", start: "", end: "" })}>Add Education</button>
          </section>

          <section>
            <h2>Skills</h2>
            {skills.map((skill, i) => (
              <div key={i} className="dynamic-section">
                <input name="name" placeholder="Skill" value={skill.name} onChange={e => handleChange(i, e, skills, setSkills)} />
                {i > 0 && <button type="button" onClick={() => removeItem(i, skills, setSkills)}>Remove</button>}
              </div>
            ))}
            <button type="button" onClick={() => addItem(skills, setSkills, { name: "" })}>Add Skill</button>
          </section>
          
          <section>
            <h2>Languages</h2>
            {languages.map((lang, i) => (
              <div key={i} className="dynamic-section">
                <input name="name" placeholder="Language" value={lang.name} onChange={e => handleChange(i, e, languages, setLanguages)} />
                {i > 0 && <button type="button" onClick={() => removeItem(i, languages, setLanguages)}>Remove</button>}
              </div>
            ))}
            <button type="button" onClick={() => addItem(languages, setLanguages, { name: "" })}>Add Language</button>
          </section>

          <section>
            <h2>Projects</h2>
            {projects.map((proj, i) => (
              <div key={i} className="dynamic-section">
                <input name="title" placeholder="Project Title" value={proj.title} onChange={e => handleChange(i, e, projects, setProjects)} />
                <textarea name="desc" placeholder="Project Description" value={proj.desc} onChange={e => handleChange(i, e, projects, setProjects)} />
                {i > 0 && <button type="button" onClick={() => removeItem(i, projects, setProjects)}>Remove</button>}
              </div>
            ))}
            <button type="button" onClick={() => addItem(projects, setProjects, { title: "", desc: "" })}>Add Project</button>
          </section>

          <section>
            <h2>Certifications</h2>
            {certifications.map((cert, i) => (
              <div key={i} className="dynamic-section">
                <input name="title" placeholder="Certification Title" value={cert.title} onChange={e => handleChange(i, e, certifications, setCertifications)} />
                <input name="issuer" placeholder="Issuer (e.g., Coursera)" value={cert.issuer} onChange={e => handleChange(i, e, certifications, setCertifications)} />
                {i > 0 && <button type="button" onClick={() => removeItem(i, certifications, setCertifications)}>Remove</button>}
              </div>
            ))}
            <button type="button" onClick={() => addItem(certifications, setCertifications, { title: "", issuer: "" })}>Add Certification</button>
          </section>

          <section>
            <h2>Achievements</h2>
            {achievements.map((ach, i) => (
              <div key={i} className="dynamic-section">
                <input name="title" placeholder="Achievement" value={ach.title} onChange={e => handleChange(i, e, achievements, setAchievements)} />
                {i > 0 && <button type="button" onClick={() => removeItem(i, achievements, setAchievements)}>Remove</button>}
              </div>
            ))}
            <button type="button" onClick={() => addItem(achievements, setAchievements, { title: "" })}>Add Achievement</button>
          </section>

          <button onClick={handleNext} className="submit-btn">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResumeForm;
