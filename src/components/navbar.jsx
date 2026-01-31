import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <section className="navbar">
      <div className="logo">
        <h1>ResumePro</h1>
      </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`navlink ${open ? "active" : ""}`}>
        <ul className="nav-btn">
          <li>Home</li>
          <li>Templates</li>
          <li>Features</li>
          <li>Contact</li>
        </ul>
       <Link to="/signup"><button>Signup</button></Link>
        <Link to="/login" ><button>Login</button></Link>

      </div>
    </section>
  );
}

export default Navbar;
