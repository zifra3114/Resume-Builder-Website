import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ResumeProvider } from "./context/ResumeContext";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Hero from "./pages/hero";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Resume from "./pages/resume";
import Template from "./pages/template";
import ResumePreview from "./pages/preview";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      easing: "ease-in-out",
      once: true, // animate only once
      offset: 100, // start animation after 100px
    });
  }, []);

  return (
    <Router>
      <ResumeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/template" element={<Template />} />
          <Route path="/preview" element={<ResumePreview />} />
        </Routes>
        <Footer />
      </ResumeProvider>
    </Router>
  );
}

export default App;
