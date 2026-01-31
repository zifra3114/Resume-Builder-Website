import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./pages/hero";
import Footer from "./components/footer";
import Signup from "./pages/signup";
import Login from "./pages/login";
import ResumeForm from "./pages/resume";

// Helper component to conditionally show Footer
function FooterWrapper() {
  const location = useLocation();
  return location.pathname === "/" ? <Footer /> : null;
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resume-form" element={<ResumeForm />} />
      </Routes>

      {/* Footer only on home page */}
      <FooterWrapper />
    </Router>
  );
}

export default App;
