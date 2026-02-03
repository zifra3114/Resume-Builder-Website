import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import "../App.css";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle section scroll
  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      // Navigate to Home page with state
      navigate("/", { state: { scrollTo: id } });
    } else {
      // Already on Home page → scroll to section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LOGO */}
        <div className="footer-logo">
          <h2>ResumePro</h2>
          <p>Create modern resumes easily with our smart tools.</p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => handleScrollTo("home")}>Home</li>
            <li onClick={() => handleScrollTo("templates")}>Templates</li>
            <li onClick={() => handleScrollTo("features")}>Features</li>
            <li onClick={() => handleScrollTo("contact")}>Contact</li>
          </ul>
        </div>

        {/* SOCIAL ICONS */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="social-icon" />
            </a>
          </div>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 ZIFRA FIRDOSU ResumePro. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
