import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import loginBg from "../assets/login.png";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    userEmail: "",
    userPassword: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Account not found
    if (!storedUser) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No account found. Please signup first!",
        background: "rgba(0,0,0,0.8)",
        color: "#fff",
        confirmButtonColor: "#9c27ff",
      });
      return;
    }

    // Login success
    if (
      form.userEmail === storedUser.email &&
      form.userPassword === storedUser.password
    ) {
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "Redirecting to Resume page...",
        background: "rgba(0,0,0,0.8)",
        color: "#fff",
        confirmButtonColor: "#9c27ff",
      }).then(() => {
        navigate("/resume");
      });
    } 
    // Wrong credentials
    else {
      Swal.fire({
        icon: "error",
        title: "Invalid Credentials",
        text: "Please check your email and password.",
        background: "rgba(0,0,0,0.8)",
        color: "#fff",
        confirmButtonColor: "#9c27ff",
      });
    }
  };

  return (
    <div
      className="login-bg"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="login-overlay">
        <div className="login-container" data-aos="flip-right">

          {/* LEFT IMAGE */}
          <div className="login-left">
            <img src={loginBg} alt="Login visual" />
          </div>

          {/* RIGHT FORM */}
          <div className="login-right">
            <div className="login-card">
              <h1>Login</h1>

              <form onSubmit={handleLogin} autoComplete="off">
                {/* Hidden autofill blockers */}
                <input
                  type="text"
                  name="fakeusernameremembered"
                  style={{ display: "none" }}
                />
                <input
                  type="password"
                  name="fakepasswordremembered"
                  style={{ display: "none" }}
                />

                <input
                  type="email"
                  name="userEmail"
                  placeholder="Email"
                  value={form.userEmail}
                  onChange={handleChange}
                  autoComplete="new-email"
                  required
                />

                <input
                  type="password"
                  name="userPassword"
                  placeholder="Password"
                  value={form.userPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                />

                <button type="submit">Login</button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
