import React, { useContext, useRef, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Wand,
  User,
  Languages as LanguagesIcon,
} from "lucide-react";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { ResumeContext } from "../context/ResumeContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../App.css";

function Preview() {
  const { resumeData, template } = useContext(ResumeContext);
  const navigate = useNavigate();
  const resumeRef = useRef();

  /* ================= PDF DOWNLOAD ================= */
  const handleDownload = () => {
    const input = resumeRef.current;
    if (!input) return;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const ratio = canvasWidth / canvasHeight;
      const width = pdfWidth;
      const height = width / ratio;

      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("resume.pdf");
    });
  };

  /* ================= NO DATA ALERT ================= */
  useEffect(() => {
    if (!resumeData) {
      Swal.fire({
        background: "#1e293b",
        color: "#fff",
        icon: "warning",
        title: "No Resume Found",
        text: "Please fill resume form first!",
        confirmButtonText: "Go to Form",
        confirmButtonColor: "#a79076",
      }).then(() => {
        navigate("/resume");
      });
    }
  }, [resumeData, navigate]);

  /* stop rendering if no data */
  if (!resumeData) return null;

  /* SAFE DATA ACCESS */
  const personal = resumeData.personal || {};
  const experience = resumeData.experience || [];
  const education = resumeData.education || [];
  const skills = resumeData.skills || [];
  const languages = resumeData.languages || [];

  /* ================= TEMPLATE RENDER ================= */
  const renderTemplate = () => {
    switch (template) {
      case "template1":
        return (
          <div ref={resumeRef} className="olive-resume">
            <div className="olive-header">
              {personal.profileImg && (
                <img
                  src={URL.createObjectURL(personal.profileImg)}
                  alt="profile"
                  className="olive-img"
                />
              )}
              <h1>{personal.name || ""}</h1>
            </div>

            <div className="olive-body">
              <div className="olive-left">
                <h3>
                  <Briefcase className="olive-icon" /> Experience
                </h3>
                {experience.map((exp, i) => (
                  <div key={i} className="olive-block">
                    <h4>{exp.jobTitle}</h4>
                    <p>
                      {exp.company} | {exp.start} - {exp.end}
                    </p>
                    <p>{exp.desc}</p>
                  </div>
                ))}

                <h3>
                  <Phone className="olive-icon" /> Contact
                </h3>
                <p>{personal.phone}</p>
                <p>{personal.email}</p>
                <p>{personal.address}</p>
              </div>

              <div className="olive-right">
                <h3>
                  <User className="olive-icon" /> About
                </h3>
                <p>{personal.summary}</p>

                <h3>
                  <GraduationCap className="olive-icon" /> Education
                </h3>
                {education.map((edu, i) => (
                  <p key={i}>
                    {edu.degree} — {edu.institute}
                  </p>
                ))}

                <h3>
                  <Wand className="olive-icon" /> Skills
                </h3>
                <ul className="olive-skills">
                  {skills.map((skill, i) => (
                    <li key={i}>{skill.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case "template2":
        return (
          <div ref={resumeRef} className="amanda-resume">
            {/* LEFT SIDEBAR */}
            <div className="amanda-left">
              {personal.profileImg && (
                <img
                  src={URL.createObjectURL(personal.profileImg)}
                  alt="profile"
                  className="amanda-img"
                />
              )}

              <div className="amanda-section">
                <h4>
                  <Phone className="amanda-icon" /> CONTACT
                </h4>
                <p>{personal.phone}</p>
                <p>
                  <Mail className="amanda-icon" /> {personal.email}
                </p>
                <p>
                  <MapPin className="amanda-icon" /> {personal.address}
                </p>
              </div>

              <div className="amanda-section">
                <h4>
                  <LanguagesIcon className="amanda-icon" /> LANGUAGES
                </h4>
                <ul>
                  {languages.map((l, i) => (
                    <li key={i}>{l.name}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="amanda-right">
              <div className="amanda-header">
                <h1>{personal.name}</h1>
                <h3>{personal.title}</h3>
              </div>

              <div className="amanda-block">
                <h3>
                  <User className="amanda-icon" /> About
                </h3>
                <p>{personal.summary}</p>
              </div>

              {/* EDUCATION SECTION */}
              <div className="amanda-block">
                <h3>
                  <GraduationCap className="amanda-icon" /> Education
                </h3>
                {education.map((edu, i) => (
                  <div key={i} className="amanda-edu">
                    <strong>{edu.degree}</strong>
                    <p>{edu.institute}</p>
                    <span>
                      {edu.start} - {edu.end}
                    </span>
                  </div>
                ))}
              </div>

              <div className="amanda-block">
                <h3>
                  <Wand className="amanda-icon" /> Skills
                </h3>
                {skills.map((skill, i) => (
                  <div key={i} className="amanda-skill">
                    <span>{skill.name}</span>
                    <div className="skill-bar">
                      <div className="skill-fill"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "template3":
        return (
          <div ref={resumeRef} className="samira-resume">
            <div className="samira-left">
              <h1>{personal.name}</h1>
              <p>{personal.title}</p>
              <div className="samira-section">
                <h4>
                  <Phone className="samira-icon" /> Contact
                </h4>
                <p>{personal.phone}</p>
                <p>{personal.email}</p>
                <p>{personal.address}</p>
              </div>
              <div className="samira-section">
                <h4>
                  <Wand className="samira-icon" /> Skills
                </h4>
                {skills.map((skill, i) => (
                  <div key={i} className="samira-skill">
                    <span>{skill.name}</span>
                    <div className="samira-bar">
                      <div className="samira-fill"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="samira-right">
              {personal.profileImg && (
                <img
                  src={URL.createObjectURL(personal.profileImg)}
                  alt="profile"
                  className="samira-img"
                />
              )}
              <div className="samira-section">
                <h4>
                  <User className="samira-icon" /> About
                </h4>
                <p>{personal.summary}</p>
              </div>
            </div>
          </div>
        );

      default:
        return <p>Select Template</p>;
    }
  };

  /* ================= PAGE ================= */
  return (
    <div className="preview-page">
      <div className="resume-wrapper">
        {renderTemplate()}

        <div className="preview-buttons">
          <button onClick={handleDownload}>Download PDF</button>
          <button onClick={() => navigate("/template")}>
            Change Template
          </button>
        </div>
      </div>
    </div>
  );
}

export default Preview;
