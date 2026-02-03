import React from "react"
import { Link } from "react-router-dom";
import Template1 from "../assets/template1.jpg"
import Template2 from "../assets/template2.jpg"
import Template3 from "../assets/template3.jpg"
import Robo2 from "../assets/robot1.gif"
import { Mail, Phone, MapPin } from "lucide-react";
import Robo1 from "../assets/robot2.png"
function Hero(){
    return(
        <>
        <section className="hero-section" id="home">
          <div className="hero-content" data-aos="fade-down" >
            <h1>Build a Professional Resume in Minutes</h1>
            <p>
Create modern, ATS-friendly resumes with beautiful templates and get hired faster.
</p>
 <Link to="signup"><button>Create Resume</button></Link>
          </div>

        </section>
          <section className="template-section" id="templates">
            <div className="template-header" data-aos="zoom-in-up">
    <h2>Choose Your Resume Template</h2>
    <p>
      Select from a variety of modern, ATS-friendly templates that stand out to recruiters.
    </p>
  </div>
  <div className="template-grid">
 <div className="template-card" data-aos="zoom-in-up">
  <img src={Template1} alt="Template 1" />
  <div className="template-card-content">
    <h3>Classic Blue</h3>
    <Link to="signup"><button>Select</button></Link>
  </div>
</div>

<div className="template-card" data-aos="zoom-in-up">
  <img src={Template2} alt="Template 2" />
  <div className="template-card-content">
    <h3>Modern Minimal</h3>
    <Link to="signup"><button>Select</button></Link>
  </div>
</div>

<div className="template-card" data-aos="zoom-in-up">
  <img src={Template3} alt="Template 3" />
  <div className="template-card-content">
    <h3>Creative Pink</h3>
    <Link to="signup"><button>Select</button></Link>
  </div>
</div>
</div>

          </section>
        
          <section className="feature-section" id="features">

  {/* LEFT SECTION */}
  <div className="left-container">
    <div className="left-content" data-aos="fade-right">
      <h2>Easy Resume Customization</h2>
      <p>Quickly customize your resume with our drag-and-drop editor and ready-made sections.</p>

      <ul className="feature-list">
        <li><span className="tick-icon"></span> Drag & Drop Editor</li>
        <li><span className="tick-icon"></span> Pre-made Sections</li>
        <li><span className="tick-icon"></span> Instant Preview</li>
      </ul>

      <Link to="signup"><button>Create Resume</button></Link>
    </div>

    <div className="left-image" data-aos="fade-left">
      <img src={Robo2} alt="" />
    </div>
  </div>


  {/* RIGHT SECTION */}
  <div className="right-container">
    <div className="right-image" data-aos="fade-right">
      <img src={Robo1} alt="" />
    </div>

    <div className="right-content" data-aos="fade-left">
      <h2>Modern Templates</h2>
      <p>Choose from a wide variety of modern, ATS-friendly templates that make your resume stand out.</p>

      <ul className="feature-list">
        <li><span className="tick-icon"></span> Drag & Drop Editor</li>
        <li><span className="tick-icon"></span> Pre-made Sections</li>
        <li><span className="tick-icon"></span> Instant Preview</li>
      </ul>

      <Link to="signup"><button>Create Resume</button></Link>
    </div>
  </div>

</section>
<section className="contact-section" id="contact">
      
      {/* TOP HEADING CENTER */}
      <div className="contact-heading" data-aos="zoom-in-up">
        <h2>Contact Us</h2>
        <p>Have questions or want to create your perfect resume? Reach out today!</p>
      </div>

      {/* CONTACT CONTAINER */}
      <div className="contact-container">

        {/* LEFT SIDE INFO */}
        <div className="contact-left" data-aos="fade-right">
          <div className="contact-info">
            <p><Mail className="contact-icon" /> zifrafirdous.dev@gmail.com</p>
            <p><Phone className="contact-icon" /> +92 3412620272</p>
            <p><MapPin className="contact-icon" /> Karachi, Pakistan</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-right" data-aos="fade-left">
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>


        
        </>
    )
}
export default Hero;