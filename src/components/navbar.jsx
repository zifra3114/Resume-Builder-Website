import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../App.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle section scroll
  const handleScrollTo = (id) => {
    // Close menu if open (mobile)
    if (open) setOpen(false);

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
    <section className={`navbar ${scrolled ? "scrolled" : ""}`}  data-aos="fade-up" >
      <div className="logo">
        <h1>ResumePro</h1>
      </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`navlink ${open ? "active" : ""}`}>
        <ul className="nav-btn">
          <li onClick={() => handleScrollTo("home")}>Home</li>
          <li onClick={() => handleScrollTo("templates")}>Templates</li>
          <li onClick={() => handleScrollTo("features")}>Features</li>
          <li onClick={() => handleScrollTo("contact")}>Contact</li>
        </ul>

        <Link to="/signup">
          <button>Signup</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
