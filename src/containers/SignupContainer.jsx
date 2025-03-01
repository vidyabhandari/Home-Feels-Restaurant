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
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    } catch (error) {
      console.log(error.message);
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
              required
            />
          </div>
          <div className="signup-container-input-group">
            <label className="signup-container-label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="signup-container-input"
              required
            />
          </div>

          <div className="signup-container-input-group">
            <label className="signup-container-label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="signup-container-input"
              required
            />
          </div>
          <div className="signup-container-input-group">
            <label className="signup-container-label">Confrim Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
              className="signup-container-input"
              required
            />
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
