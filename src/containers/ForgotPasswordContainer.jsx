import { useState } from "react";
import Title from "../components/Title";
import "../css/ForgotPassword.css"

const ForgotPasswordContainer = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <Title title="Reset Password" />
        <p className="forgot-password-description">
          Enter your email to reset your account.
        </p>

        <form className="forgot-password-form">
          <div className="forgot-password-input-group">
            <label className="forgot-password-label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="forgot-password-input"
              required
            />
          </div>

          <button
            type="submit"
            className="forgot-password-button"
          >
            Send Reset Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordContainer;