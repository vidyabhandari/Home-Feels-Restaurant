import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Footer from "../components/Footer";
import Title from "../components/Title";
import "../css/ContactContainer.css"; // Import the CSS file

const ContactContainer = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/contact", {
        email,
        name,
        message,
        subject,
      });
      alert("We will reply to you soon!");
      navigate("/");
      console.log(response.data);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="bg-light">
        {/* Hero Section */}
        <div className="text-center">
          <Title title="Contact Us" />
          <p className="intro-text">
            Reach out to us with any questions or inquiries. We're here to help
            and look forward to hearing from you!
          </p>
        </div>

        {/* Form & Contact Info Section */}
        <div className="form-container">
          {/* Form Section */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-textarea"
              />
            </div>
            <button className="submit-button">Submit</button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="contact-info">
          <div className="info-section">
            <p className="info-title">Call Us:</p>
            <p className="info-text">+1-234-567-8900</p>
          </div>
          <div className="info-section">
            <p className="info-title">Hours:</p>
            <p className="info-text">Mon-Fri: 11am - 8pm</p>
            <p className="info-text">Sat, Sun: 9am - 10pm</p>
          </div>
          <div className="info-section">
            <p className="info-title">Our Location:</p>
            <p className="info-text">123 Bridge Street</p>
            <p className="info-text">Nowhere Land, LA 12345</p>
            <p className="info-text">United States</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContainer;
