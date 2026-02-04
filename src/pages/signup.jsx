import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import signupBg from "../assets/sign.png";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!form.name || !form.email || !form.password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all fields",
        background: "rgba(0,0,0,0.8)",
        color: "#fff",
        confirmButtonColor: "#9c27ff",
      });
      return;
    }

    // Save user in localStorage
    localStorage.setItem("user", JSON.stringify(form));

    // Success Alert
    Swal.fire({
      icon: "success",
      title: "Signup Successful!",
      text: "Redirecting to Resume page...",
      background: "rgba(0,0,0,0.8)",
      color: "#fff",
      confirmButtonColor: "#9c27ff",
    }).then(() => {
      navigate("/resume");
    });
  };

  return (
    <div
      className="signup-bg"
      style={{ backgroundImage: `url(${signupBg})` }}
      id="signup"
    >
      <div className="signup-overlay">
        <div className="signup-container" data-aos="flip-down">
          
          {/* LEFT IMAGE */}
          <div className="signup-left">
            <img src={signupBg} alt="Signup visual" />
          </div>

          {/* RIGHT FORM */}
          <div className="signup-right">
            <div className="signup-card">
              <h1>Create Account</h1>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                />
                <button type="submit">Create Account</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
