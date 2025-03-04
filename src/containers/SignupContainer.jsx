import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Title from "../components/Title";
import "../css/SignupContainer.css";

const SignupContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    let errors = {};
    const emailPattern =
      /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.match(emailPattern)) {
      errors.email = "Invalid email format";
    }
    if (!password.match(passwordPattern)) {
      errors.password =
        "Password must have 8+ characters, uppercase, lowercase, number, and special character";
    }
    if (confPassword !== password) {
      errors.confPassword = "Passwords do not match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/register",
        {
          name,
          email,
          password,
        }
      );

      alert("Sign Up Successful");
      navigate("/login");
      console.log(response.data);

      setName("");
      setEmail("");
      setPassword("");
      setConfPassword("");
      setErrors({});
    } catch (error) {
      console.log(error.message);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-container-wrapper">
      <div className="signup-container-box">
        <Title title="Sign up" />
        <p className="signup-container-description">
          Enter your credentials to create your account.
        </p>

        <form className="signup-container-form" onSubmit={handleSubmit}>
          <div className="signup-container-input-group">
            <label className="signup-container-label">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="signup-container-input"
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>

          <div className="signup-container-input-group">
            <label className="signup-container-label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signup-container-input"
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="signup-container-input-group">
            <label className="signup-container-label">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="signup-container-input"
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>

          <div className="signup-container-input-group">
            <label className="signup-container-label">Confirm Password</label>
            <div className="password-input-wrapper">
              <input
                type={showConfPassword ? "text" : "password"}
                placeholder="Re-enter your password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                className="signup-container-input"
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowConfPassword(!showConfPassword)}
              >
                {showConfPassword ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
            {errors.confPassword && (
              <p className="error-message">{errors.confPassword}</p>
            )}
          </div>

          <button type="submit" className="signup-container-button">
            Signup
          </button>
        </form>

        <p className="signup-container-login-text">
          Have an account?<span> </span>
          <Link to="/login" className="signup-container-login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupContainer;
