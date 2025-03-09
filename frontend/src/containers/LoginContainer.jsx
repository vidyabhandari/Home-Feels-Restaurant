import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Importing eye icons
import Title from "../components/Title";
import "../css/LoginContainer.css";
import { StoreContext } from "../context/StoreContext";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [errors, setErrors] = useState({ email: "", password: "" }); // Error states

  const navigate = useNavigate();
  const { setToken, url, loadCartData } = useContext(StoreContext);
  console.log(url)

  // Email validation regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Password validation regex
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validateForm = () => {
    let valid = true;
    let errors = { email: "", password: "" };

    if (!emailRegex.test(email)) {
      errors.email = "Invalid email format (e.g. user@example.com)";
      valid = false;
    }

    if (!passwordRegex.test(password)) {
      errors.password =
        "Password must be at least 8 characters and include an uppercase letter, lowercase letter, a number, and a special character.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // If it's the admin, redirect to the external admin panel
    if (email === "admin@gmail.com" && password === "Admin@123") {
      window.location.href = `https://home-feels-restaurant-5s5o.vercel.app`;
      return; // Replace with your actual admin portal URL
    } else {
      const response = await axios.post(`${url}/api/user/login`, {
        email,
        password,
      });

      if (response.data && response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        setToken(response.data.token);
        alert("Login Successful");
        navigate("/");
      } else {
        alert("Invalid response from server");
      }
    }
  };

  return (
    <div className="login-container-wrapper">
      <div className="login-container-box">
        <Title title="Login" />
        <p className="login-container-description">
          Enter your credentials to access your account.
        </p>

        <form className="login-container-form" onSubmit={handleSubmit}>
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
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="login-container-input-group">
            <label className="login-container-label">Password</label>
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"} // Toggle input type
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="login-container-input"
                required
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
            <div className="login-container-forgot-password-wrapper">
              <Link
                to="/forgot-password"
                className="login-container-forgot-password-link"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <button type="submit" className="login-container-button">
            Login
          </button>
        </form>

        <p className="login-container-signup-text">
          Don’t have an account?<span> </span>
          <Link to="/signup" className="login-container-signup-link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginContainer;
