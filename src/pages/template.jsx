import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ResumeContext } from "../context/ResumeContext";
import "../App.css"; // Alag CSS import

// Dummy template images (aap apni assets folder me add kar sakte ho)
import template1Img from "../assets/select2.jpg";
import template2Img from "../assets/select1.jpg";
import template3Img from "../assets/select3.jpg";
import background from "../assets/login.png"; // background same as login

function Template() {
  const navigate = useNavigate();
  const { setTemplate } = useContext(ResumeContext);

  const handleSelect = (template) => {
    setTemplate(template);
    navigate("/preview");
  };

  return (
    <div
      className="template-page"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="template-overlay">
        <h2>Select Your Resume Template</h2>

        <div className="template-cards">
          <div className="template-card" onClick={() => handleSelect("template1")}>
            <img src={template1Img} alt="Template 1" />
         
          </div>

          <div className="template-card" onClick={() => handleSelect("template2")}>
            <img src={template2Img} alt="Template 2" />
           
          </div>

          <div className="template-card" onClick={() => handleSelect("template3")}>
            <img src={template3Img} alt="Template 3" />
            
          </div>
        </div>

        <button className="next-btn" onClick={() => navigate("/resume")}>
          Back to Form
        </button>
      </div>
    </div>
  );
}

export default Template;

