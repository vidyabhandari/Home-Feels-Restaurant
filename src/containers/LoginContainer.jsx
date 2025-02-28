import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Title from "../components/Title";
import "../css/LoginContainer.css"

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/login",
        {
          email,
          password,
        }
      );

      if (response.data && response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        alert("Login Successful");
        navigate("/");
      } else {
        alert("Invalid response from server");
      }

      setEmail("");
      setPassword("");
    } catch (error) {
      alert("Invalid credentials or server issue");
      console.log("Login Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="login-container-wrapper">
      <div className="login-container-box">
        <Title title="Login" />
        <p className="login-container-description">
          Enter your credentials to access your account.
        </p>

        <form className="login-container-form">
          <div className="login-container-input-group">
            <label className="login-container-label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-container-input"
              required
            />
          </div>

          <div className="login-container-input-group">
            <label className="login-container-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="login-container-input"
              required
            />
            <div className="login-container-forgot-password-wrapper">
              <Link
                to="/forgot-password"
                className="login-container-forgot-password-link"
              >
                Forgot your password
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="login-container-button"
          >
            Login
          </button>
        </form>

        <p className="login-container-signup-text">
          Don&lsquo;t have an account?<span> </span>
          <Link to="/signup" className="login-container-signup-link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginContainer;
