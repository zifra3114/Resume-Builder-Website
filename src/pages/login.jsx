import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Robot from "../assets/login.png"; 
import bgImage from "../assets/sigup-bg.jpg"; // full page background

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    setError("");
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // ✅ Navigate directly to resume page after login
      navigate("/resume-form");
    } catch (err) {
      console.error("Login error:", err);
      if (err.code === "auth/user-not-found") {
        setError("User not found. Please signup first.");
      } else if (err.code === "auth/wrong-password") {
        setError("Wrong password.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email format!");
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="login-bg"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="login-overlay">
        <div className="login-container">
          {/* Left side form */}
          <div className="login-left">
            <div className="login-card">
              <h1>Welcome Back</h1>
              {error && <p className="login-error">{error}</p>} {/* show error */}
              <form onSubmit={loginHandler}>
                <input name="email" type="email" placeholder="Email" required />
                <input name="password" type="password" placeholder="Password" required />
                <button type="submit" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>
            </div>
          </div>

          {/* Right side image */}
          <div className="login-right">
            <img src={Robot} alt="Login Visual" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
