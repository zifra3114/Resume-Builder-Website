import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../App.css";
import sideImage from "../assets/sign.png"; // left side image
import bgImage from "../assets/sigup-bg.jpg"; // background image

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const signupHandler = async (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    if (!name || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setLoading(true);
    try {
      // 1️⃣ Create user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2️⃣ Save user info to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        uid: user.uid,
        createdAt: new Date(),
      });

      // 3️⃣ Navigate to ResumeForm after success
      navigate("/resume-form");
    } catch (err) {
      console.error("Signup error:", err);
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered. Try logging in!");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email format!");
      } else if (err.code === "auth/weak-password") {
        setError("Password should be at least 6 characters!");
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="signup-bg"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="signup-overlay">
        <div className="signup-container">
          {/* Left side image */}
          <div className="signup-left">
            <img src={sideImage} alt="Visual" />
          </div>

          {/* Right side form */}
          <div className="signup-right">
            <div className="signup-card">
              <h1>Create Account</h1>
              {error && <p className="signup-error">{error}</p>} {/* show errors */}
              <form onSubmit={signupHandler}>
                <input name="name" placeholder="Full Name" required />
                <input name="email" type="email" placeholder="Email" required />
                <input name="password" type="password" placeholder="Password" required />
                <button type="submit" disabled={loading}>
                  {loading ? "Creating..." : "Signup"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
