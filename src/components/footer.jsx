import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

import "../App.css";

function Footer() {
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
            <li>Home</li>
            <li>Templates</li>
            <li>Features</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* SOCIAL ICONS */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <Facebook className="social-icon" />
            <Instagram className="social-icon" />
            <Linkedin className="social-icon" />
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
